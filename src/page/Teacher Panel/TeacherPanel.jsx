import { useEffect, useState } from 'react';
// import img from '../../image/homeimage2.png';
import fb from '../../image/icons/facebook1.png';
import gmail from '../../image/icons/gmail.png'
// import wp from '../../image/icons/whatsapp.png'
import Aos from 'aos';
import { useQuery } from '@tanstack/react-query';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
// import { useQueries } from '@tanstack/react-query';


const TeacherPanel = () => {
  

    const { isPending, data: info, isError, error } = useQuery({
        queryKey: ['PanelTeacher'],
        queryFn: async () => {
            const res = await fetch('https://dagmc-server.vercel.app/teacher')
            // const res = await fetch('https://dagmc-server.vercel.app/panelFirst')
            return res.json()
        }
    })


    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

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


    

    return (
        <>
            
            {/* <PageTitle title="Panel Member"/> */}
            <img className=" mt-10 w-full" src="https://capsule-render.vercel.app/api?type=waving&height=300&color=gradient&text=Teacher%20Panel%20&section=header&reversal=false&fontAlignY=50&animation=twinkling&strokeWidth=0&fontSize=33"/>



            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 mb-24 ">


                {info?.map((item, i) => (

                    <div data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1600" key={i}
                        className='col-span-1 mx-auto group mb-20 overflow-hidden shadow-2xl shadow-[#00f7ff] rounded-2xl border-[#00f7ff]'>
                        <div className='flex h-full  mx-auto flex-col gap-2 w-80 border border-[#00f7ff]  shadow-[#00f7ff]  rounded-2xl'>
                            <div className='aspect-square w-full  relative overflow-hidden rounded-xl'>
                                <img className='object-cover  h-80 p-3 w-full group-hover:scale-110 transition shadow-2xl shadow-[#00f7ff] border-[#00f7ff]'
                                    src={item?.pic}
                                    alt='Room' />
                            </div>
                            <div className='font-semibold text-white ml-4 mt-0'>{item?.name}</div>

                            <div className='font-light text-[#00f7ff] ml-4'>
                                {item?.title}
                            </div>
                            <div className='avatar mt-2'>
                                <div className="w-8 ml-4 rounded-full    ring-offset-2">
                                    <a href={item?.fbUrl} target="_blank" rel="noopener noreferrer">
                                        <img src={fb} alt="Facebook" className='cursor-pointer' />
                                    </a>
                                </div>
                                <div className="w-8 ml-4 rounded-full    ring-offset-2">
                                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(item?.gmail)}`} target="_blank" rel="noopener noreferrer">
                                        <img src={gmail} alt="Facebook" className='cursor-pointer' />
                                    </a>
                                </div>
                                {/* <div className="w-8 ml-4 rounded-full    ring-offset-2">
                                    <a href={item?.wp} target="_blank" rel="noopener noreferrer">
                                        <img src={wp} alt="Facebook" className='cursor-pointer' />
                                    </a>
                                </div> */}
                            </div>
                            <div className='flex flex-row justify-end gap-1 mb-4 mr-4'>
                                <div className='flex flex-col items-center justify-end gap-2 ml-40'>

                                    <div className="rating  rating-sm">
                                        <input type="radio" name="rating-7" className="mask mask-star-2  bg-[#00f7ff]" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2  bg-[#00f7ff]" checked />
                                        <input type="radio" name="rating-7" className="mask mask-star-2  bg-[#00f7ff]" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2  bg-[#00f7ff]" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2  bg-[#00f7ff]" />
                                    </div>
                                    {/* lg */}
                                    <div className="rating rating-md">
                                        <input type="radio" name="rating-8" className="mask mask-star-2  bg-[#00f7ff]" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2  bg-[#00f7ff]" checked />
                                        <input type="radio" name="rating-8" className="mask mask-star-2  bg-[#00f7ff]" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2  bg-[#00f7ff]" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2  bg-[#00f7ff]" />
                                    </div>

                                    <div className="rating gap-1 ">
                                        <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                                        <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" />
                                        <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                                        <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" checked />
                                        <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
};

export default TeacherPanel;