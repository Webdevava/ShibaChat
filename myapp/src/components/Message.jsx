import shiba from "../img/shiba.jpg";

const Message = () => {
    return (
        <div className="message owner">
            <div className="messageInfo">
                <img src={shiba} alt="" />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
                <img src={shiba} alt="" />
            </div>
        </div>
    );
};

export default Message;
