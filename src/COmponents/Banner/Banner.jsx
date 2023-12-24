import Lottie from "lottie-react";
import bannerAni from '../../assets/annimation/Animation - 1703359019104.json';



const Banner = () => {
    return (
        <div>
            <div className="hero  bg-red-50 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <Lottie animationData={bannerAni} className="w-full"></Lottie>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Command Your Tasks, Conquer Your Goals</h1>
                        <p className="py-6">
                            Embark on a journey of unparalleled efficiency with TaskHub, the ultimate task management solution designed to supercharge your productivity. Say goodbye to chaos and hello to organized success! Seamlessly capture, organize, and conquer your tasks with our intuitive platform.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;