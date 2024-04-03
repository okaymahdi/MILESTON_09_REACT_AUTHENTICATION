/** import slider from react marquee */
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex items-center">
            <button className="btn btn-secondary">Latest</button>
            {/* marquee slider */}
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="no-underline text-[#403F3F] mr-12" to="/">
                    I can be a React component, multiple React components...
                </Link>
                <Link className="no-underline text-[#403F3F] mr-12" to="/">
                    I can be a React component, multiple React components...
                </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;