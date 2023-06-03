import shiba from '../img/shiba.jpg'


const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Siba Chat</span>
            <div className="user">
                <img src={shiba} alt="" />
                <span>John</span>
                <button>logout</button>
            </div>
        </div>
    );
};

export default Navbar;
