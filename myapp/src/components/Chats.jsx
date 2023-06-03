import shiba from "../img/shiba.jpg";

const Chats = () => {
    return (
        <div className="chats">
            <div className="userChat">
                <img src={shiba} alt="" />
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src={shiba} alt="" />
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src={shiba} alt="" />
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
};

export default Chats;
