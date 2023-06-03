

const Login = () => {
 return (
  <div className="formContainer">
   <div className="formWrapper">
    <span className="logo">Shiba Chat</span>
    <span className="title">Login</span>
    <form>
     <input type="text" placeholder="E-Mail"/>
     <input type="password" placeholder="Password"/>
     <button>Sign in</button>
    </form>
    <p>Not registered <a href="">register</a></p>
   </div>
  </div>
) 
}

export default Login
