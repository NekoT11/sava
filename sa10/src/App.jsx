import "./App.css";
import { useEffect, useState } from "react"; 
import Form from "./components/register";
import Login from "./components/login";
// import UserList from "./components/TaskLi";
import { BrowserRouter as Router, Routes, Route } from "react-router";


function App() {

  const [users, setUsers] = useState([
    {name: 'user1', phone: 123123, pass: '123'},
    {name: 'user2', phone: 123124, pass: '123'},
    {name: 'user3', phone: 123125, pass: '123'}
  ]);


  useEffect(()=>{
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  const addUser = (user) => {
    setUsers([...users, user]);
    console.log(users);

  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Form addUser={addUser} />} />
        <Route path="/reg" element={<Form addUser={addUser} />} />
        <Route path="/login" element={<Login/>} />
        
      </Routes>


      {/* <Form addUser={addUser} /> {} */}
      
      {/* {users.map((e, index) => 
        // <UserList key={index} name={e.name} phone={e.phone} />
      )} */}
    </div>
  );
}

export default App;