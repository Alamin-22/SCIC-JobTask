import { FaCode } from "react-icons/fa";
import { MdOutlineCorporateFare } from "react-icons/md";
import { GiBank } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { SiMinds } from "react-icons/si";
const Features = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                            Who Benefits from TaskHub
                        </h1>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                            TaskHub: Empowering coders, teams, financiers, students, entrepreneurs, and creatives. Your all-in-one task solution.
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <FaCode className="text-2xl text-red-400 " />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Developers Delight</h2>
                                <p className="leading-relaxed text-base">
                                    Streamline coding projects, track milestones, and enhance collaboration among development teams.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <MdOutlineCorporateFare className="text-2xl text-red-400" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Corporate Professionals Corner</h2>
                                <p className="leading-relaxed text-base">
                                    Elevate project management for corporate initiatives, ensuring seamless coordination and timely execution.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <GiBank className="text-2xl text-red-400" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Bankers Boost</h2>
                                <p className="leading-relaxed text-base">
                                    Empower startup founders and small business owners to organize tasks, set goals, and achieve business milestones.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <SiMinds className="text-2xl text-red-600" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Creative Minds Hub</h2>
                                <p className="leading-relaxed text-base">
                                    Inspire creative professionals by providing an organized space for brainstorming, idea management, and project execution.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <MdWork  className="text-2xl text-red-400" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Remote Work Champions</h2>
                                <p className="leading-relaxed text-base">
                                    Facilitate remote teams with tools for efficient task delegation, progress tracking, and collaborative success. Help you in every section.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <FaPersonWalkingLuggage className="text-2xl text-red-400" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Entrepreneurs Ally</h2>
                                <p className="leading-relaxed text-base">
                                    Empower startup founders and small business owners to organize tasks, set goals, and achieve business milestones.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;