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
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out', 
      once: true, 
      mirror: false,
    });
  }, []);
  return (
  <div className="App">
    <Header/>
    <Routing/>
    <Footer/>
  </div>
  );
}

export default App;
