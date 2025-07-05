import Header from "./Header/Header";
import Section from "./Section/Section";
import Hero from "./Hero/Hero";
import Wrapper from "./Wrapper/Wrapper";
import Main from "./Main/Main";
import Request from "./Request/Request";
import Footer from "./Footer/Footer";
import './App.css'



export default function App(){
  return(
    <div>
      <Header/>
      <Section/>
      <Hero/>
      <Wrapper/>
      <Main/>
      <Request/>
      <Footer/>
    </div>
  )
}