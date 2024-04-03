/** icon from react icons */
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";

/** q-zone photo import */
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'


const RightSideNav = () => {
    return (
        <div>

            {/* right side feature card 01 */}
            <div className="p-4 mb-6">
                <h2 className="text-3xl text-[#403F3F] font-semibold font-poppins">Login With</h2>

                {/* google login button */}
                <button className="btn btn-outline w-full">
                    <FaGoogle className="text-2xl" />
                    <span className="text-[#706F6F] font-medium  text-base">
                    Login With Google
                    </span>
                </button>

                {/* github login button */}
                <button className="btn btn-outline w-full">
                    <FaGithub className="text-2xl" />
                    <span className="text-[#706F6F] font-medium  text-base">
                    Login With Github
                    </span>
                </button>
            </div>

            {/* right side feature card 02 */}
            <div className="p-4 mb-6">
                <h2 className="text-3xl text-[#403F3F] font-semibold font-poppins">Find Us On</h2>

                {/* facebook login button */}
                <a className="p-4 flex gap-3 items-center no-underline border rounded-t-lg" href="#">
                    <FaFacebook className="text-3xl" />
                    <span className="text-[#706F6F] font-medium  text-base">
                        Facebook
                    </span>
                </a>

                {/* twitter login button */}
                <a className="p-4 flex gap-3 items-center no-underline border-x" href="#">
                    <FaTwitter className="text-3xl" />
                    <span className="text-[#706F6F] font-medium  text-base">
                        Twitter
                    </span>
                </a>

                {/* instagram login button */}
                <a className="p-4 flex gap-3 items-center no-underline border rounded-b-lg" href="#">
                    <FaInstagram className="text-3xl" />
                    <span className="text-[#706F6F] font-medium  text-base">
                        Instagram
                    </span>
                </a>


            </div>

            
            {/* right side feature card 03 */}
            <div className="p-4 mb-6">
                <h2 className="text-3xl text-[#403F3F] font-semibold font-poppins">Q-Zone</h2>

                {/* q-zone images */}
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>


        </div>
    );
};

export default RightSideNav;