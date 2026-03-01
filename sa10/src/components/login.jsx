import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')
    
    const user = JSON.parse(localStorage.getItem('users'))
    // console.log(user);
    const found = user.find((e)=>{e.email === email && e.pass === pass})    
    if(!found){

        setError('Пользователь не найден')
        return
    }
     localStorage.setItem('currentUser', email)


    return(
        
        <div>
            <p>{error}</p>
            <input type="text" placeholder="email" />
            <input type="text" placeholder="pass" />
            <button  >Логин</button>
            
        </div>
    )
}

