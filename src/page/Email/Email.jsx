import { useLottie } from 'lottie-react';
import email from '../../assets/animationJson/email.json'
import { useRef } from 'react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nkq4sit', 'template_3l8jez1', form.current, '5ykua3e3wxwV0i9BS')
            .then((result) => {
                console.log(result.text);
                toast.success('Email send. Thank You')
                e.target.reset()
            }, (error) => {
                console.log(error.text);
                toast.error('Server Busy. Send Later')
                e.target.reset()
            });
    };


    const options = {
        animationData: email,
        loop: 2,

    };
    const { View } = useLottie(options);
    return (
        <>

            
            <div className="w-full md:mt-56 max-w-6xl mx-auto shadow-2xl shadow-[#00f7ff] border-[#00f7ff]">
                <img className="border-t border-b mx-auto shadow-2xl shadow-[#00f7ff] border-[#00f7ff]" src="https://capsule-render.vercel.app/api?type=venom&height=305&color=gradient&text=Get%20In%20Touch&textBg=false&animation=fadeIn&stroke=00f7ff&strokeWidth=-1" alt="" />



                <div className="grid mt-10 mb-10 max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-transparent border shadow-2xl shadow-[#00f7ff] border-[#00f7ff]">
                    <div className="flex flex-col justify-between">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold  lg:text-4xl text-center text-[#00f7ff] ">Let's Debate!</h2>
                            <span className="">{View}</span>
                        </div>

                    </div>
                    <form className="space-y-6" ref={form} onSubmit={sendEmail}>
                        <div>
                            <label className="text-sm text- shadow-2xl shadow-[#00f7ff]">Full name</label>
                            {/* <input   type="text" name="name" placeholder="Your name" className="w-full p-3  ring-1 rounded border ring-violet-800" /> */}
                            <input className="p-2 shadow-2xl shadow-[#00f7ff] px-3 w-full ring-1  ring-[#00f7ff] mt-2 rounded-xl border hover:shadow-lg" type="text" name="name" placeholder="Your name" required />
                        </div>
                        <div>
                            <label className="text-sm text-[#00f7ff]">Email</label>
                            {/* <input id="email" name='from_email' type="email" className="w-full p-3  ring-1 ring-violet-600 rounded border " /> */}
                            <input className="p-2  px-3 w-full ring-1  ring-[#00f7ff] shadow-2xl shadow-[#00f7ff] mt-2 rounded-xl border hover:shadow-lg" type="text" name="name" placeholder="Your Email" required />
                        </div>

                        <div>
                            <label className="text-sm text-[#00f7ff] shadow-2xl shadow-[#00f7ff]">Message</label>
                            <textarea aria-expanded={false} id="message" name='message' rows="3" className="w-full p-3 rounded border ring-1 ring-[#00f7ff] shadow-2xl shadow-[#00f7ff] " ></textarea>
                        </div>
                        <button type="submit" className="w-full p-3 text-sm font-bold   bg-[#00f7ff] shadow-2xl shadow-[#00f7ff] relative border-2 rounded-lg bg-transparent py-2.5 px-5  uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full text-[#00f7ff] before:w-full before:origin-top-left before:scale-y-0 before:bg-[#00f7ff] before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-y-100 border-[#00f7ff]">Send Message</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Email;