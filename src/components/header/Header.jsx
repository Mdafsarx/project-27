import Profile from "../../assets/images/profile.png"

const Header = () => {
    return (
        <div className="flex justify-between items-center max-w-7xl mx-auto my-7 border-b-2 pb-5">
            <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
            <img src={Profile} alt="" />

        </div>
    );
};

export default Header;