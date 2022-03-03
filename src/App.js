// import logo from './logo.svg';
import AboutUs from './AboutUs/AboutUs';
import './App.css';
import Footer from './Footer/Footer';
import Hero from './HeroSection/Class HeroSection';
import Login from './Login/Login';
import Portfolio from './Portfolio/Portfolio';
import Register from './Register/Register';
import Skills from './Skills/Skills';
function App() {
  return (
    <div className="App">
      {/* <Hero/>
      <AboutUs/>
      <Skills/>
      <Portfolio/>
      <Footer/> */}
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
