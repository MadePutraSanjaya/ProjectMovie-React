import React from "react";
import "./template.scss";
import 'swiper/swiper.min.css'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Routes from './Config/Routes';

function App() {
 return (
         <>
           <Navbar/>
           <Routes />
           <Footer />
         </>
 );
}

export default App;
