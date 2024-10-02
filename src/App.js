import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Work from "./components/Work"
import Contact from "./components/Contact";
import Experience from "./components/Experiences/Experience";
import './App.css'
import Footer from "./components/Footer";

import projectImg1 from '../src/img/projectImg2.png'
import projectImg2 from '../src/img/ecommerce1.png'

import eSparkLogo from '../src/img/eSpark-logo-white.svg'

const projectData = [
  {
    projectName: "E Commerce Web App",
    projectDesc: "This is an e-commerce app where you can add products to the cart, place orders, and use user authentication.",
    projectImg: projectImg2
  },
  {
    projectName: "CyberSec Club",
    projectDesc: "This web app was created for the Silver Oak cybersec club organized by IEEE silver oak group. This web app was created in ReactJS",
    projectImg: projectImg1
  },
  {
    projectName: "E Commerce Web App",
    projectDesc: "This is an e-commerce app where you can add products to the cart, place orders, and use user authentication.",
    projectImg: projectImg2
  },
  {
    projectName: "CyberSec Club",
    projectDesc: "This web app was created for the Silver Oak cybersec club organized by IEEE silver oak group. This web app was created in ReactJS",
    projectImg: projectImg1
  },
  {
    projectName: "CyberSec Club",
    projectDesc: "This web app was created for the Silver Oak cybersec club organized by IEEE silver oak group. This web app was created in ReactJS",
    projectImg: projectImg1
  }
];
const expData = [
  {
    companyName: "eSparkBiz Technologies Pvt Ltd.",
    companyDesc: "Strengthened MYSQL and HTML, CSS, JS. Mastered ReactJS and TypeScript for front-end development.Acquired foundational knowledge in Python and learned to use frameworks such as Flask, Django, and Django REST Framework (DRF), along with other engineering softwares.Developed a full-stack task management system using Node.js and Express.js. Built a Twitter clone in TypeScript with a ReactJS and Django and developed real time features such as user notifications using websocket django channels, user feed, tweet,comments, replies.",
    companyLogo: eSparkLogo
  },
  {
    companyName: "eSparkBiz Technologies Pvt Ltd.",
    companyDesc: "Strengthened MYSQL and HTML, CSS, JS. Mastered ReactJS and TypeScript for front-end development.Acquired foundational knowledge in Python and learned to use frameworks such as Flask, Django, and Django REST Framework (DRF), along with other engineering softwares.Developed a full-stack task management system using Node.js and Express.js. Built a Twitter clone in TypeScript with a ReactJS and Django and developed real time features such as user notifications using websocket django channels, user feed, tweet,comments, replies.",
    companyLogo: eSparkLogo
  },
  {
    companyName: "eSparkBiz Technologies Pvt Ltd.",
    companyDesc: "Strengthened MYSQL and HTML, CSS, JS. Mastered ReactJS and TypeScript for front-end development.Acquired foundational knowledge in Python and learned to use frameworks such as Flask, Django, and Django REST Framework (DRF), along with other engineering softwares.Developed a full-stack task management system using Node.js and Express.js. Built a Twitter clone in TypeScript with a ReactJS and Django and developed real time features such as user notifications using websocket django channels, user feed, tweet,comments, replies.",
    companyLogo: eSparkLogo
  },
];

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Work projects={projectData} />
      <Experience exps={expData} />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
