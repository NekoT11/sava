import { useState } from "react";
import { useNavigate } from "react-router";


export default function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  function HandleClick() {
    const emailL = localStorage.getItem('email')
    const passL = localStorage.getItem('pass')


    if (email === emailL && pass === passL) {
        
        localStorage.setItem('currentUser', emailL)
        navigate('/dashboard')
    } else {
      console.log('Неверный пароль или логин')
    }
  }



  return (
    <div>
      <input type="text" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
      <input type="text" placeholder="password" onChange={(e)=> setPass(e.target.value)} />

      
      <button onClick={HandleClick}>Войти</button>
    </div>


    )
} 