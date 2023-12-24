import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-red-100 text-gray-700">
                <aside>
                    <p className="text-5xl">TaskHub</p>
                    <p>Copyright © 2023 - All right reserved by taskHub</p>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <Link to={"https://github.com/Alamin-22"} target="_blank">
                            <IoLogoGithub className="text-3xl" />
                        </Link>
                        <Link to={"https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"} target="_blank">
                            <FaLinkedin className="text-3xl text-blue-700" />
                        </Link>
                        <Link to={"https://protfolioofalamin.netlify.app/"} target="_blank">
                            <FaLaptopCode className="text-3xl"/>
                        </Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;