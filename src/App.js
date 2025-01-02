import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Home from './ClothStore/Home';
import Header from "./ClothStore/Header";
import Footer from "./ClothStore/Footer";
import Routing from "./ClothStore/Routing";
import { createContext, useEffect, useState } from "react";
import Welcome from "./ClothStore/Admin/Welcome";
import Dashboard from "./ClothStore/Admin/Dashboard";
import Login from "./ClothStore/Admin/Login";

export const loginStatus=createContext()
function App() {
  const [login,setLogin]=useState(false)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out', 
      once: true, 
      mirror: false,
    });
  }, []);
  return (
  <loginStatus.Provider value={[login,setLogin]}>
    <div className="App">
      <Header/>
      <Routing/>
      <Footer/>
    </div>
  </loginStatus.Provider>
  );
}

export default App;
