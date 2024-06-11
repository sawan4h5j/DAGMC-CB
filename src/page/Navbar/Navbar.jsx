import { Link, NavLink, useLocation } from "react-router-dom";
import club_logho from '../../image/DAGMC.png'
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import NavBarProfile from "../../components/NavBarProfile";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
// import MuteToggle from "../../components/MuteToggle";

// import { Link as Go, animateScroll as scroll } from "react-scroll";

const Navbar = () => {

    const { user, } = useContext(AuthContext);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation()

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    //darkMode functions
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "synthwave")
    const handleChange = e => {
        if (e.target.checked) {
            setTheme("synthwave")
        }
        else {
            setTheme("cupcake")
        }
    }
    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)

    }, [theme])
    //darkMode functions ends here





    const navLinks = <>
        <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleChange} checked={theme === "cupcake" ? false : true} />

            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

        </label>

        <li><NavLink to='/' className=" btn btn-outline btn-default   border-b-red-800 border-neutral transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-[#00f7ff] hover:border-none">Home</NavLink></li>

        {/* <li><Link to={'/'} className="btn btn-outline btn-default   border-b-lime-600  border-neutral transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-[#00f7ff] hover:border-none ">About Us </Link></li> */}

        <li><NavLink to='/aboutUs' className="btn btn-outline btn-default   border-b-lime-600  border-neutral transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-[#00f7ff] hover:border-none ">About Us </NavLink></li>
        {/* <li><NavLink to='/panel-member' className="btn btn-outline btn-default   border-b-lime-600  border-neutral transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none  hover:bg-[#00f7ff] hover:border-none">Panel Member</NavLink></li> */}



        <details className="dropdown">
            <summary className="btn btn-outline btn-default w-full  border-b-red-600  border-neutral transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-[#00f7ff] hover:border-none">PanelMembers</summary>
            <ul tabIndex={0} className="p-2 shadow menu ml-10 dropdown-content z-[1] gap-3 bg-base-200 rounded-box w-52">
                {/* <li>
                    <NavLink to="/panel-member" className=" btn-outline w-full btn-default border-b-violet-600 border-neutral transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-[#00f7ff] hover:border-none btn ">Panel Member</NavLink>
                </li> */}

                {/* <li>
                    <NavLink to='/panel-member0' className=" btn-outline  btn-default border-b-pink-600 border-neutral transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-[#00f7ff] hover:border-none btn p-1">Teacher Panel</NavLink>
                </li> */}

                <li>
                    <NavLink to='/panel-member1' className=" btn-outline  btn-default border-b-pink-600 border-neutral transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-[#00f7ff] hover:border-none btn p-1">Executive panel 2023-2024</NavLink>
                </li>

                <li>
                    <NavLink to='/panel-member2' className=" btn-outline btn-default border-b-lime-600 border-neutral transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-[#00f7ff] hover:border-none btn  p-1">Executive panel  2022-2023</NavLink>
                </li>

                <li>

                    <NavLink to='/panel-member3' className=" btn-outline btn-default border-b-lime-600 border-neutral transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-[#00f7ff] hover:border-none btn p-1 ">Executive panel 2021-2022</NavLink>
                </li>
            </ul>
        </details>

        <li><NavLink to='/gallery' className="btn btn-outline btn-default    border-b-amber-600 border-neutral normal-case text-lg  transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none  hover:bg-[#00f7ff] hover:border-none">Gallery </NavLink></li>
        <li><NavLink to='/e-workshop' className="btn btn-outline btn-default    border-b-amber-300 border-neutral normal-case text-lg  transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-[#00f7ff] hover:border-none">E- WorkShop</NavLink></li>

        <NavBarProfile />


    </>
    // // const [mute, setMute] = useState(false);
    // const [isPlaying, setIsPlaying] = useState(false);

    // useEffect(() => {
    //     const audio = document.getElementById('backgroundMusic');
    //     if (audio) {
    //         if (isPlaying) {
    //             audio.pause();
    //         } else {
    //             audio.play();
    //         }
    //     }
    // }, [isPlaying]);

    // useEffect(() => {
    //     const audio = document.getElementById('backgroundMusic');
    //     if (location.pathname.includes('gallery') || location.pathname.includes('e-workshop')) {
    //         setIsPlaying(false);
    //     } else {
    //         setIsPlaying(true);
    //     }
    // }, [location.pathname]);

    // const togglePlay = () => {
    //     const audio = document.getElementById('backgroundMusic');
    //     if (audio) {
    //         if (isPlaying) {
    //             audio.pause();
    //         } else {
    //             audio.play();
    //         }
    //         setIsPlaying(!isPlaying);
    //     }
    //     setIsPlaying(!isPlaying);
    // };

    return (
        <div className=" w-full  navbar  shadow-2xl  ">
            <div className="w-full max-w-[1600px] mx-auto   xl:px-30 md:px-10 sm:px-2 px-4">
                {/* {!(location.pathname.includes('gallery') || location.pathname.includes('e-workshop')) && (
                <><audio id="backgroundMusic" >
                        <source src="./holePage.mp3" type="audio/mpeg" />
                    </audio><button
                        className="fixed z-10 left-5 md:left-3 top-[550px] md:top-[890px] btn btn-outline btn-default border-b-red-800 border-neutral transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none bg-amber-600 hover:bg-amber-900 text-white animate-bounce hover:text-white hover:border-none"
                        onClick={togglePlay}
                    >
                            {isPlaying ? <FaVolumeMute /> : <FaVolumeUp />}
                        </button></>
                )} */}
                <div className="navbar-start flex items-center ">
                    <div className="dropdown lg:hidden md:hidden">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 gap-3 shadow bg-base-100 rounded-box w-52">
                            {/* <NavBarProfile /> */}
                            {navLinks}

                        </ul>
                    </div>

                    <div className="navbar-start  gap-5 flex items-center ">
                        <div className="avatar  sm:block  shadow-[#00f7ff]">
                            <div className="w-28  rounded-3xl  shadow-[#00f7ff]">
                                <img className="" src={club_logho} />
                            </div>
                        </div>

                        {/* <Link to='/' className="btn btn-ghost normal-case text-base   md:text-xl lg:text-xl ">DAGMC CLUB</Link> */}
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-4">
                        {navLinks}
                    </ul>
                </div>


            </div>
        </div>
    );
};

export default Navbar;