import './App.css'
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Work from "./components/Work"
import Contact from "./components/Contact";
import Experience from "./components/Experiences/Experience";
import Footer from "./components/Footer";

import { projectData } from "./data/ProjectData";
import { expData } from "./data/ExperienceData";


function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Experience exps={expData} />
      <Work projects={projectData} />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
