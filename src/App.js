// import logo from './logo.svg';
import AboutUs from './AboutUs/AboutUs';
import './App.css';
import Footer from './Footer/Footer';
import Hero from './HeroSection/Class HeroSection';
import Portfolio from './Portfolio/Portfolio';
import Skills from './Skills/Skills';
function App() {
  return (
    <div className="App">
      <Hero/>
      <AboutUs/>
      <Skills/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
