//import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import './App.css'
import Navbar from './components/Navbar'
import Users from "./components/Users";
import Home from "./components/Home";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<Users/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
