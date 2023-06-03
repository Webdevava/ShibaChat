import shiba from "../img/shiba.jpg";

const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="find chat" />
            </div>
            <div className="userChat">
                <img src={shiba} alt="" />
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    );
};

export default Search;
