
import './App.css';
import About from './components/about/About';
import Carousal from './components/carousal/Carousal';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Team from './components/team/Team';

function App() {
  return (
    <div>
      <Navbar  />
      <Home />
      <Carousal />
      <About  />
      <Team  />
      <Contact  />
      <Footer   />
    </div>
  );
}

export default App;
