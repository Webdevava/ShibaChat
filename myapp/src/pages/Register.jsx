import AddAvatar from '../img/addAvatar.png'

const Register = () => {
  return (
    <div className="formContainer">
     <div className="formWrapper">
      <span className="logo">Shiba Chat</span>
      <span className="title">Register</span>
      <form>
       <input type="text" placeholder="Name"/>
       <input type="text" placeholder="E-Mail"/>
       <input type="password" placeholder="Password"/>
       <label htmlFor="file"><img src={AddAvatar} alt="" /> Add Avatar</label>
       <input type="file" name="file" id="file" />
       <button>Sign up</button>
      </form>
      <p>Already registered <a href="">login</a></p>
     </div>
    </div>
  ) 
}

export default Register
