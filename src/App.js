import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Work from "./components/Work"
import Contact from "./components/Contact";
import './App.css'
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About/>
      <Work />
      <Contact />
      <Footer />
    </div>
    
  );
}

export default App;
