/* eslint-disable react/no-unescaped-entities */

import { Link, useNavigate } from 'react-router-dom';
import Center from '../../utilits/Center';
import { useContext, useState } from "react"
import { useLottie } from "lottie-react";
import img from "../../assets/animationJson/login.json"
// import { MdOutlineEmail } from "react-icons/md";
// import { RiLockPasswordLine } from "react-icons/ri";
import googles from "../../assets/animationJson/google.gif"
// import github from "../../assets/animationJson/github.gif"
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';
import PageTitle from '../../components/PageTitle';



const Login = () => {

    const { login, user, googleLogIn,  } = useContext(AuthContext)

    const options = {
        animationData: img,

        loop: true,
    };
    const { View } = useLottie(options);

    // const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    // const [url, setUrl] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => {
                toast.success("Login Successful")
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
            })
    }

    const handleLogin = e => {
        e.preventDefault()
        login(email, password)
        .then(result=>{
            console.log(result);
            toast.success('Login Successful')
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            console.log(error);
            toast.error('Please Try With Google or signUp')
            toast.error(error.message)
        })
    }

    return (
        <Center>
                <PageTitle title="Login"/>
            <div className="flex items-center mt-10 justify-center min-h-[800px] bg-black dark:bg-transparent ">

                <div className="flex bg-black rounded-2xl shadow-lg dark:bg-transparent dark:shadow-2xl">
                    {/* form section */}
                    <div className="sm:w-1/2 px-16 mb-5">


                        <h2 className="font-bold text-3xl mt-5">Login</h2>
                        <p className="text-sm mt-4 mb-12">By creating an account or signing in, you understand and agree to Indeed's Terms. You also acknowledge our Cookie and Privacy policies.</p>

                        <form className="flex flex-col gap-2" onSubmit={handleLogin}>

                            <div className="container">
                                <div className="inputbox">
                                    <input onChange={e => setEmail(e.target.value)} type="text" required />
                                    <span>E-mail</span>
                                    <i></i>
                                </div>
                            </div>


                            <div className="container">
                                <div className="inputbox">
                                    <input onBlur={e => setPassword(e.target.value)} type="password" required />
                                    <span>Password</span>
                                    <i></i>
                                </div>
                            </div>

                            {/* <div className='gap-9 flex flex-col'>
                                <div className='relative  flex items-center text-gray-400 focus-within:text-gray-600'>
                                    <MdOutlineEmail className='absolute  ml-2 pointer-events-none' size={23} />

                                    <input onChange={e => setEmail(e.target.value)} className="p-2 pr-3 pl-9   duration-300 ring-1 w-full text-white  ring-violet-600  rounded-xl border hover:shadow-lg " type="email" name="email" placeholder="E-mail" required />
                                </div>

                                <div className='relative flex items-center text-gray-400 focus-within:text-gray-600'>
                                    <RiLockPasswordLine className='absolute  ml-2 pointer-events-none' size={23} />

                                    <input onBlur={e => setPassword(e.target.value)} className="p-2 pr-3 pl-9 duration-300 ring-1 text-white w-full px-3 ring-violet-500  rounded-xl border hover:shadow-lg" type="password" name="password" placeholder="Password" required />
                                </div>
                            </div> */}

                            <button className="bg-gradient-to-r  from-violet-600 to-indigo-600 text-white font-semibold rounded-xl py-2 mt-5 shadow-lg hover:scale-105 duration-300">Login</button>
                        </form>

                        <div className="mt-10  grid grid-cols-3 items-center text-gray-500 ">
                            <hr className="border-gray-500" />
                            <p className="text-center">OR</p>
                            <hr className="border-gray-500" />
                        </div>

                        <button onClick={handleGoogleLogIn} className="bg-white text-white mb-5 shadow-lg hover:scale-105 duration-300 border bg-gradient-to-r from-purple-300 to-indigo-400  w-full rounded-xl mt-5 flex justify-center items-center text-sm">
                            {/* <span className="">{Views}</span>  */}
                            <img className="w-10 " src={googles} alt="" />
                            Continue With Google</button>



                        <div>
                            <p className="border-t text-xl py-4 border-gray-400">Don't have an Account? <Link to='/signUp'><span className="underline text-white">Register</span></Link></p>
                        </div>
                    </div>

                    {/* logo section */}
                    <div className="w-1/2  hidden sm:block">
                        <span className="w-72 h-[700px] bg-cover " >{View}</span>
                    </div>
                </div>
            </div>
        </Center>
    );
};

export default Login;
