import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    const data = [
        {
            title: "1.Critical Thinking Skills",
            description: "Debating hones critical thinking by requiring participants to analyze arguments, identify logical fallacies, and evaluate evidence to support their claims. This skill is valuable not only in debate but also in everyday decision-making and problem-solving.",
            commonClass: "card max-w-80 md:max-w-full mx-auto w-full p-3  font-bold bg-[#00f7ff] shadow-2xl shadow-[#00f7ff] relative border-2 rounded-lg bg-transparent py-2.5 px-5  transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full text-[#00f7ff] before:w-full before:origin-top-left before:scale-y-0 before:bg-[#00f7ff] before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-y-100 border-[#00f7ff] ",

            hoverClass: "before:absolute  before:origin-top-left before:-z-10 before:h-full before:w-full  before:scale-y-0 before:bg-[#00f7ff] before:rounded-xl before:transition-transform before:duration-500  hover:text-black before:hover:scale-y-100 shadow-teal-500",
            aos: 'fade-right'
        },
        {
            title: "2.Public Speaking Abilities",
            description: " Debating enhances public speaking skills by encouraging individuals to articulate their thoughts clearly, confidently, and persuasively in front of an audience. This is invaluable for presentations, job interviews, and leadership roles.",

            commonClass: "card max-w-80 md:max-w-full mx-auto w-full p-3  font-bold bg-[#00f7ff] shadow-2xl shadow-[#00f7ff] relative border-2 rounded-lg bg-transparent py-2.5 px-5  transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full text-[#00f7ff] before:w-full before:origin-top-left before:scale-y-0 before:bg-[#00f7ff] before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-y-100 border-[#00f7ff] ",

            hoverClass: "before:absolute  before:origin-top-left before:-z-10 before:h-full before:w-full  before:scale-y-0 before:bg-[#00f7ff] before:rounded-xl before:transition-transform before:duration-500  hover:text-black before:hover:scale-y-100 shadow-teal-500",

        },
        {
            title: "3.Research Skills",
            description: " Engaging in debates necessitates thorough research to gather evidence, statistics, and examples to support one's arguments. Participants learn how to navigate various sources, assess credibility, and synthesize information effectively.",
            commonClass: "card max-w-80 md:max-w-full mx-auto w-full p-3  font-bold bg-[#00f7ff] shadow-2xl shadow-[#00f7ff] relative border-2 rounded-lg bg-transparent py-2.5 px-5  transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full text-[#00f7ff] before:w-full before:origin-top-left before:scale-y-0 before:bg-[#00f7ff] before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-y-100 border-[#00f7ff] ",

            hoverClass: "before:absolute  before:origin-top-left before:-z-10 before:h-full before:w-full  before:scale-y-0 before:bg-[#00f7ff] before:rounded-xl before:transition-transform before:duration-500  hover:text-black before:hover:scale-y-100 shadow-teal-500",
            aos: 'fade-left'
        },
        {
            title: "4.Empathy and Understanding",
            description: "Debating exposes individuals to diverse perspectives and encourages them to consider alternative viewpoints. This fosters empathy, understanding, and tolerance towards differing opinions, promoting constructive dialogue and mutual respect",
            commonClass: "card max-w-80 md:max-w-full mx-auto w-full p-3  font-bold bg-[#00f7ff] shadow-2xl shadow-[#00f7ff] relative border-2 rounded-lg bg-transparent py-2.5 px-5  transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full text-[#00f7ff] before:w-full before:origin-top-left before:scale-y-0 before:bg-[#00f7ff] before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-y-100 border-[#00f7ff] ",

            hoverClass: "before:absolute  before:origin-top-left before:-z-10 before:h-full before:w-full  before:scale-y-0 before:bg-[#00f7ff] before:rounded-xl before:transition-transform before:duration-500  hover:text-black before:hover:scale-y-100 shadow-teal-500",
            aos: 'fade-right'
        },
        {
            title: "5.Conflict Resolution Skills",
            description: "Conflict Resolution Skills Debating teaches individuals how to engage in respectful disagreement, manage conflicts, and find common ground. These skills are essential for navigating interpersonal relationships, whether in personal or professional settings.",

            commonClass: "card max-w-80 md:max-w-full mx-auto w-full p-3  font-bold bg-[#00f7ff] shadow-2xl shadow-[#00f7ff] relative border-2 rounded-lg bg-transparent py-2.5 px-5  transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full text-[#00f7ff] before:w-full before:origin-top-left before:scale-y-0 before:bg-[#00f7ff] before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-y-100 border-[#00f7ff] ",

            hoverClass: "before:absolute  before:origin-top-left before:-z-10 before:h-full before:w-full  before:scale-y-0 before:bg-[#00f7ff] before:rounded-xl before:transition-transform before:duration-500  hover:text-black before:hover:scale-y-100 shadow-teal-500"
        },
        {
            title: "6.Persuasion Techniques",
            description: "Persuasion Techniques Debating requires participants to use persuasive techniques such as ethos, pathos, and logos to influence the audience's opinions and attitudes. Mastering these techniques enhances one's ability to advocate for their beliefs and persuade others effectively.",
            commonClass: "card max-w-80 md:max-w-full mx-auto w-full p-3  font-bold bg-[#00f7ff] shadow-2xl shadow-[#00f7ff] relative border-2 rounded-lg bg-transparent py-2.5 px-5  transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full text-[#00f7ff] before:w-full before:origin-top-left before:scale-y-0 before:bg-[#00f7ff] before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-y-100 border-[#00f7ff] ",

            hoverClass: "before:absolute  before:origin-top-left before:-z-10 before:h-full before:w-full  before:scale-y-0 before:bg-[#00f7ff] before:rounded-xl before:transition-transform before:duration-500  hover:text-black before:hover:scale-y-100 shadow-teal-500",
            aos: 'fade-left'
        },
        {
            title: "7.Confidence Building",
            description: "Confidence Building Through regular practice and feedback, debating boosts individuals' confidence in expressing their ideas and engaging in intellectual discourse. This confidence extends beyond the debate arena and positively impacts various aspects of their lives.",
            commonClass: "card max-w-80 md:max-w-full mx-auto w-full p-3  font-bold bg-[#00f7ff] shadow-2xl shadow-[#00f7ff] relative border-2 rounded-lg bg-transparent py-2.5 px-5  transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full text-[#00f7ff] before:w-full before:origin-top-left before:scale-y-0 before:bg-[#00f7ff] before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-y-100 border-[#00f7ff] ",

            hoverClass: "before:absolute  before:origin-top-left before:-z-10 before:h-full before:w-full  before:scale-y-0 before:bg-[#00f7ff] before:rounded-xl before:transition-transform before:duration-500  hover:text-black before:hover:scale-y-100 shadow-teal-500",
            aos: 'fade-right'
        },
        {
            title: "8.Lifelong Learning",
            description: "Lastly, debating instills a love for learning and intellectual curiosity as participants delve into diverse topics, explore new ideas, and engage in rigorous intellectual exchange. This passion for learning extends beyond formal education and enriches one's personal and professional growth throughout life.",
            commonClass: "card max-w-80 md:max-w-full mx-auto w-full p-3  font-bold bg-[#00f7ff] shadow-2xl shadow-[#00f7ff] relative border-2 rounded-lg bg-transparent py-2.5 px-5  transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full text-[#00f7ff] before:w-full before:origin-top-left before:scale-y-0 before:bg-[#00f7ff] before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-y-100 border-[#00f7ff] ",

            hoverClass: "before:absolute  before:origin-top-left before:-z-10 before:h-full before:w-full  before:scale-y-0 before:bg-[#00f7ff] before:rounded-xl before:transition-transform before:duration-500  hover:text-black before:hover:scale-y-100 shadow-teal-500",


        },
        {
            title: "9.Leadership Development",
            description: "Debating cultivates leadership qualities such as initiative, resilience, and teamwork. Participants learn how to lead a team, delegate tasks, and collaborate towards a common goal, essential skills for success in any leadership role.",
            commonClass: "card max-w-80 md:max-w-full mx-auto w-full p-3  font-bold bg-[#00f7ff] shadow-2xl shadow-[#00f7ff] relative border-2 rounded-lg bg-transparent py-2.5 px-5  transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full text-[#00f7ff] before:w-full before:origin-top-left before:scale-y-0 before:bg-[#00f7ff] before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-y-100 border-[#00f7ff] ",

            hoverClass: "before:absolute  before:origin-top-left before:-z-10 before:h-full before:w-full  before:scale-y-0 before:bg-[#00f7ff] before:rounded-xl before:transition-transform before:duration-500  hover:text-black before:hover:scale-y-100 shadow-teal-500",
            aos: 'fade-left'
        },

    ]



    return (

        <>
        <div id="aboutUs" className="w-full mt-20 md:mx-auto lg:mx-auto max-w-6xl mx-auto">
            {/* <h1 className="text-4xl text-center font-bold">Our Class Service</h1> */}
            <img className="border-[#00f7ff] border-b mx-auto mb-24  shadow-2xl shadow-[#00f7ff]" src="https://capsule-render.vercel.app/api?type=venom&height=305&color=gradient&text=Facilities%20Of%20Debating&textBg=false&animation=fadeIn&stroke=00f7ff&strokeWidth=-1" alt="" />
            <div id="aboutUs" className="w-full  max-w-6xl mx-auto p-3 ">

                <div className="grid  grid-cols-1  sm:grid-cols-2 md:grid-cols-3 
                                    lg:grid-cols-3  gap-10 mb-28 mx-auto ">

                    {
                        data.map((item, i) => (
                            <div data-aos="fade-right" key={i} className={`card ${item?.commonClass} ${item?.hoverClass}`}>
                                <div className=" card-body">
                                    <h2 className="card-title">{item?.title}</h2>
                                    <p>{item?.description}</p>

                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
        </>
    );
};

export default About;



