import cam from '../img/cam.png'
import add from '../img/add.png'
import more from '../img/more.png'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className="chat">
     <div className="chatInfo">
      <span>Jane</span>
      <div className="chatIcons">
        <img src={cam} alt="cam" />
        <img src={add} alt="cam" />
        <img src={more} alt="cam" />
      </div>
     </div>
     <Messages/>
     <Input/>
    </div>
  )
}

export default Chat
