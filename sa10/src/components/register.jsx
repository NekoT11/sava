import { useState } from "react";



const Form = ({ addUser }) => { 
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');


  function handleClick() {
    if(pass ===''|| email === '' || phone === '' || pass.length < 6){
    setError ('ошибка')
    return
    }
    const newUser = { name: email, phone: phone, pass: pass };
    addUser(newUser); 
  }

  return (
    <div>
      <h1>Регистрация</h1>
      <p>{error}</p>
      <input 
        type="text" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <input 
        type="text" 
        placeholder="Phone" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
      />

       <input 
        type="text" 
        placeholder="pass" 
        value={pass} 
        onChange={(e) => setPass(e.target.value)} 
      />
      
      <button onClick={handleClick}>
        Регистрация
      </button>
    </div>
  );
};

export default Form;