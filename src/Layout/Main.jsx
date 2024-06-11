import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../page/Navbar/Navbar";
import Footer from "../page/Footer/Footer";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import SparkContainer from "@kamiru/react-spark";
import ClickSound from "../components/ClickSound";
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';


const Main = () => {
    const [loading, setLoading] = useState(false)


    const [isPlaying, setIsPlaying] = useState();

    const togglePlay = () => {
        const audio = document.getElementById('backgroundMusic');
        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            setIsPlaying(!isPlaying);
        }
    };
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)

    }, [])

    const location = useLocation();
    const isGalleryOrWorkshop = location.pathname.includes('gallery') || location.pathname.includes('e-workshop');
    const isGalleryAndWorkshop = location.pathname.includes('gallery') || location.pathname.includes('e-workshop');

    useEffect(() => {
        if (isGalleryOrWorkshop) {
            const audio = document.getElementById('backgroundMusic');
            if (audio) {
                audio.pause();
            }
            setIsPlaying(false);
        }
    }, [isGalleryOrWorkshop, location.pathname]);

    useEffect(() => {
        window.scroll(0, 0)
    }, [location.pathname])
    return (
        <>
            <audio id="backgroundMusic" loop   >
                <source src="./homeAudio.mp3" />
            </audio>
            <button onClick={togglePlay} className={`fixed z-10 left-5 md:left-3 top-[550px] md:top-[600px] btn btn-outline btn-default border-b-red-800 border-neutral transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none bg-amber-600 hover:bg-amber-900 text-white animate-bounce hover:text-white hover:border-none ${isGalleryAndWorkshop ? 'hidden' : ''}`}>
                {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
            </button>
            <SparkContainer randomnessOn={true} className=" ">
                {loading ? <Loader /> :
                    <><ClickSound></ClickSound>
                        <Navbar />
                        <div className="min-h-[calc(100vh-68px)]">

                            <Outlet>

                            </Outlet>
                        </div><Footer /></>

                }
            </SparkContainer>
        </>
    );
};

export default Main;