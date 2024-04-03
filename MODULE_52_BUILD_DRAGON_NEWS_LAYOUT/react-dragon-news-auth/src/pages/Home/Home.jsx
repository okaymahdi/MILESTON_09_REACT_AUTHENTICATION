import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            {/* top bar */}
            <Header />
            <BreakingNews />
            <Navbar />


            {/* right & left side navbar */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-between items-center">
                <div className="">
                    {/* left side navbar */}
                    <LeftSideNav />
                </div>

                <div className="md:col-span-2">
                    {/* middle content */}
                    <h2 className="text-4xl">News coming soon...</h2>
                </div>

                <div className="">
                    {/* right side navbar */}
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;