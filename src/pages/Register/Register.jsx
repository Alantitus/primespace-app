import "./register.scss"
import {Link} from  "react-router-dom"
import axios from "axios"


function Register() {
  const handleSubmit= async(e)=>{
    e.preventDefault()
      const formData=new FormData(e.target)
      const username=formData.get("username")
      const email=formData.get("email")
      const password=formData.get("password")
      try{const res= await axios.post("localhost:3000/api/auth/register",{
        username,email,password
      })}
      catch(err){
        console.log(err);
      }
  }
  return (
    <div className="registerPage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
            <h1>Create an Account</h1>
            <input name="username" type="text" placeholder="Username" />
            <input name="email" type="text" placeholder="Email" />
            <input name="password" type="text" placeholder="Password" />
            <button>Register</button>
            <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg1.png" alt="" />
      </div>
    </div>
  )
}

export default Register
