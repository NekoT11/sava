import { useState } from "react";
import { useNavigate } from "react-router";

export default function Register() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate()
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  function handleClik() {
    if (email === "" || pass === "" || pass.length < 6) {
      return setError("ошибка");
    }
    localStorage.setItem("email", email);
    localStorage.setItem("pass", pass);
    navigate('/login')
  }
  return (
    <div>
      <p>{error}</p>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <input type="text" onChange={(e) => setPass(e.target.value)} />
      <button onClick={handleClik}>Зарег</button>
    </div>

    // ?
  );
}
