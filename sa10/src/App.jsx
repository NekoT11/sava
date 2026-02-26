import "./App.css";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from './components/dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
