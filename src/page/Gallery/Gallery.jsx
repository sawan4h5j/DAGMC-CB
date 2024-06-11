import { useEffect } from "react";
import { useState } from "react";
import PageTitle from "../../components/PageTitle";
import { useQuery } from "@tanstack/react-query";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";


const Gallery = () => {

    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlay = () => {
        const audio = document.getElementById('backgroundGalleryMusic');
        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            setIsPlaying(!isPlaying);
        }
    };
    const { isPending, data: images, isError, error } = useQuery({
        queryKey: ['panelFirst'],
        queryFn: async () => {
            const res = await fetch('https://dagmc-server.vercel.app/gallery')
            // const res = await fetch('https://dagmc-server.vercel.app/gallery')
            return res.json()
        }
    })

    useEffect(() => {
        if (!isPending && !isError) {
            const hoverSkew = (e) => {
                const skewAmount = 20; // Adjust this value for intensity
                const boundingRect = e.target.getBoundingClientRect();
                const offsetX = e.clientX - boundingRect.left - (boundingRect.width / 2);
                const offsetY = e.clientY - boundingRect.top - (boundingRect.height / 2);
                const angleX = (offsetY / boundingRect.height) * skewAmount;
                const angleY = (offsetX / boundingRect.width) * skewAmount;

                e.target.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
            };

            const resetSkew = (e) => {
                e.target.style.transform = "none";
            };

            const images = document.querySelectorAll('.skew-on-hover');

            images.forEach(image => {
                image.addEventListener('mousemove', hoverSkew);
                image.addEventListener('mouseleave', resetSkew);
            });

            return () => {
                images.forEach(image => {
                    image.removeEventListener('mousemove', hoverSkew);
                    image.removeEventListener('mouseleave', resetSkew);
                });
            };
        }

        const audio = document.getElementById("homeAudio");
        if (audio) {
            audio.play();
        }
    }, [isPending, isError]);

    

    if (isPending) {
        return <span className="loading loading-bars loading-lg mt-96 ml-[56rem]"></span>
    }

    if (isError) {
        if (error.message === "Failed to fetch") {
            return <p className="text-center">Server is busy Please try again later. Thank you</p>
        }
        // console.log(error);
        return <p>{error.message}</p>
    }

    const reversedImages = images ? [...images].reverse() : [];

// console.log(reversedImages);

    return (
        <div className="mt-12">
            <PageTitle title="Gallery" />
            <audio id="backgroundGalleryMusic" loop autoPlay  >
                <source src="./about.mp3" />
            </audio>
            <button onClick={togglePlay} className="fixed z-10 left-5 md:left-3  top-[550px] md:top-[890px] btn btn-outline btn-default   border-b-red-800 border-neutral transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none bg-amber-600 hover:bg-amber-900 text-white animate-bounce hover:text-white hover:border-none">
                {isPlaying ?<FaVolumeUp /> : <FaVolumeMute /> }
            </button>
            <div className="p-5 sm:p-8">
                <div className="columns-1 scale-x-1  gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
                    {reversedImages?.map(img => (
                        <div key={img?._id} className="relative mb-8 overflow-hidden rounded-lg transform transition-transform hover:scale-105 skew-on-hover">
                            <img
                            
                                src={img?.url}
                                alt="Gallery"
                                className="object-cover  w-full h-full "
                            />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Gallery;