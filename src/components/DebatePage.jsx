
import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";



const DebatePage = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])



    return (

        <>

            <div data-aos="fade-right" className="before:absolute before:origin-top-left before:-z-10 before:h-full before:w-full before:scale-y-0 before:bg-[#00f7ff] before:rounded-xl before:transition-transform before:duration-500 hover:text-black before:hover:scale-y-100 shadow-[#00f7ff] card max-w-md md:max-w-2xl mb-24 mx-auto w-full p-3 font-bold bg-[#00f7ff] shadow-2xl relative border-2 rounded-lg bg-transparent py-2.5 px-5 transition-colors before:left-0 before:top-0 text-[#00f7ff] before:content-[''] border-[#00f7ff]">
                <div className="card-body">
                    <h2 className="card-title justify-center text-2xl transition-all">
                        <Link className='text-4xl' to='/Betorko'>বিতর্ক কী?</Link>
                    </h2>
                </div>
            </div>

            <div id="aboutUs" className="w-full md:mx-auto md:mt-24 lg:mx-auto max-w-6xl  mx-auto">
                {/* <h1 className="text-4xl text-center font-bold">Our Class Service</h1> */}
                {/* <img className="border-[#00f7ff] border-b mx-auto mb-24  shadow-2xl shadow-[#00f7ff]" src="https://capsule-render.vercel.app/api?type=waving&height=250&color=white&text=বিতর্কের%20নিয়মাবলী&descAlign=60&descAlignY=60&textBg=false&reversal=false&fontAlign=50&fontAlignY=50&section=header&fontColor=00f7ff&fontSize=40&rotate=0&strokeWidth=0" alt="" /> */}
                <img className="border-[#00f7ff] border-b mx-auto mb-24 shadow-2xl shadow-[#00f7ff] " src="https://capsule-render.vercel.app/api?type=venom&height=305&color=gradient&text=বিতর্কের%20নিয়মাবলী&textBg=false&animation=fadeIn&stroke=00f7ff&strokeWidth=-1" alt="" />

                <div className="w-full  max-w-6xl mx-auto p-3  ">

                    <div className="grid  grid-cols-1  sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-2 gap-4 md:gap-14 mb-28 mx-auto ">


                        <div data-aos="fade-left" className=" before:absolute  before:origin-top-left before:-z-10 before:h-full before:w-full  before:scale-y-0 before:bg-[#00f7ff] before:rounded-xl before:transition-transform before:duration-500 overflow-hidden hover:text-black before:hover:scale-y-100 shadow-[#00f7ff] card max-w-80 md:max-w-full mx-auto w-full p-3  font-bold bg-[#00f7ff] shadow-2xl relative border-2 rounded-lg bg-transparent py-2.5 px-5  transition-colors  before:left-0 before:top-0  text-[#00f7ff] before:content-['']  border-[#00f7ff] ">
                            <div className=" card-body">
                                <Link  to='/shongshodeo' className="card-title justify-center text-2xl transition-all">সংসদীয়
                                </Link>

                            </div>
                        </div>


                        <div data-aos="fade-right" className="before:absolute  before:origin-top-left before:-z-10 before:h-full before:w-full  before:scale-y-0 before:bg-[#00f7ff] before:rounded-xl before:transition-transform before:duration-500 overflow-hidden hover:text-black before:hover:scale-y-100 shadow-[#00f7ff] card max-w-80 md:max-w-full mx-auto w-full p-3  font-bold bg-[#00f7ff] shadow-2xl relative border-2 rounded-lg bg-transparent py-2.5 px-5  transition-colors  before:left-0 before:top-0  text-[#00f7ff] before:content-['']  border-[#00f7ff] ">
                            <div className=" card-body">
                                <h2 className="card-title justify-center text-2xl transition-all "> <Link to='/baroari'>বারোয়ারী</Link></h2>

                            </div>
                        </div>


                        <div data-aos="fade-left" className="before:absolute  before:origin-top-left before:-z-10 before:h-full before:w-full  before:scale-y-0 before:bg-[#00f7ff] before:rounded-xl before:transition-transform before:duration-500 overflow-hidden hover:text-black before:hover:scale-y-100 shadow-[#00f7ff] card max-w-80 md:max-w-full mx-auto w-full p-3  font-bold bg-[#00f7ff] shadow-2xl relative border-2 rounded-lg bg-transparent py-2.5 px-5  transition-colors  before:left-0 before:top-0  text-[#00f7ff] before:content-['']  border-[#00f7ff] ">
                            <div className=" card-body">
                                <h2 className="card-title justify-center text-2xl transition-all"><Link to='/Sonatoni'>সনাতনী</Link></h2>

                            </div>
                        </div>

                        <div data-aos="fade-right" className="before:absolute  before:origin-top-left overflow-hidden before:-z-10 before:h-full before:w-full  before:scale-y-0 before:bg-[#00f7ff] before:rounded-xl before:transition-transform before:duration-500  hover:text-black before:hover:scale-y-100 shadow-[#00f7ff] card max-w-80 md:max-w-full mx-auto w-full p-3  font-bold bg-[#00f7ff] shadow-2xl relative border-2 rounded-lg bg-transparent py-2.5 px-5  transition-colors  before:left-0 before:top-0  text-[#00f7ff] before:content-['']  border-[#00f7ff] ">
                        <div className=" card-body">
                            <h2 className="card-title justify-center text-2xl transition-all"> <Link to='/bipi'>বিপি</Link></h2>

                        </div>
                    </div>
                    </div>

                   



                </div>
            </div>

        </>
    );
};

export default DebatePage;



