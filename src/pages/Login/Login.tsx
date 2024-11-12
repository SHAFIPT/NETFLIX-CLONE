import { FormEvent, useState } from 'react';
import Logo from '../../assets/logo.png'
import { login , signUp } from '../../firebase';
// import netflix_bg from '../../assets/signBgImage.jpg'
import './Login.css'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

  const [signState , setSignState] = useState("Sign In");
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [loading , setLoading] = useState(false);

  const user_auth = async (e : FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    setLoading(true);
    if(signState === "Sign In"){
      await login(email,password)
    }else{
      await signUp(name,email,password)
    }
    setLoading(false);
  }

  return (
    loading ? <div className="login-spinner w-[100%] h-[100vh] flex items-center justify-center">
      <img src={netflix_spinner} alt="" className='w-[60px]' />
    </div>:
    <div className='Logo'>
      <img src={Logo} alt="" className='w-[150px] ' />
      <div className="login_form w-[100%] max-w-[450px] rounded-[4px] my-[50px] p-[60px] m-auto">
        <h1 className='text-[32px] font-semibold mb-[28px]'>{signState}</h1>
        <form action="">
          {signState === "Sign Up"? <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Your Name'/> : <></>}
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email'/>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password'/>
          <button className='w-[100%] bg-[red] h-full p-2 my-[12px] rounded-[4px]' onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-Help flex items-center justify-between text-[13px]">
          <div className="remember flex items-center gap-[5px]">
            <input type="checkbox" className="form-checkbox hidden" id="remember" />
            <label htmlFor="remember" className="custom-checkbox w-[16px] h-[16px]">
              <i className="fas fa-check text-white hidden"></i> {/* Font Awesome checkmark */}
            </label>
            <label className="text-sm">Remember Me</label>
          </div>
          <h2 className="ml-2">Need help?</h2>
        </div>
        </form>
        <div className="form-switch my-[14px]">
          {signState === "Sign In" ? <p>New to Netflix? <span onClick={()=> setSignState("Sign Up")}>Sign Up Now</span></p> :<p>Already have account ?<span onClick={()=> setSignState("Sign In")}>Sign In Now</span></p>}
        </div>
      </div>
    </div>
  );
}

export default Login
