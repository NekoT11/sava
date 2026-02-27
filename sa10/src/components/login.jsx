import { useState } from "react";
export default function Login() {
    const user = JSON.parse(localStorage.getItem('users'))
    console.log(user);
    

    return(
        
        <div>
            <input type="text" placeholder="email" />
            <input type="text" placeholder="pass" />
            <button  >Логин</button>
            
        </div>
    )
}

