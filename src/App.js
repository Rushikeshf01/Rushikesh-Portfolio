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
    projectName: "Twitter Clone",
    projectDesc: "Developed a Twitter clone where user can tweet, retweet, follow and see their feed and get notifications",
    projectImg: projectImg2,
    techStack:["Python", "Django", "ReactJS"],
    sourceCode: "https://github.com/Rushikeshf01/twitter-django",
  },
  {
    projectName: "Safety Hazard Detection System",
    projectDesc: "Ensured worker safety by identifying unauthorized presence and verifying safety gear compliance",
    projectImg: projectImg1,
    techStack:["Python", "Flask", "YOLO"],
    sourceCode: "https://github.com/Tarpit59/safety-measurements"
  },
  {
    projectName: "Sentiment Analysis of Product Review",
    projectDesc: "Enabled businesses to better understand and improve their product strategies based on customer feedback",
    projectImg: projectImg1,
    techStack:["Python", "Django", "NLP"],
    sourceCode: "https://github.com/PatelPreyansh30/be-sentimental-analysis"
  },
  {
    projectName: "E Commerce Web App",
    projectDesc: "This is an e-commerce app where you can add products to the cart, place orders, and use user authentication.",
    projectImg: projectImg2,
    techStack:["Python", "Django", "ReactJS"],
    sourceCode: "https://github.com/Rushikeshf01/ecommerce-frontend"
  },
  {
    projectName: "CyberSec Club",
    projectDesc: "This web app was created for the Silver Oak cybersec club organized by IEEE silver oak group. This web app was created in ReactJS",
    projectImg: projectImg1,
    techStack:["VueJS", "HTML", "CSS"],
    sourceCode: "https://github.com/Rushikeshf01"
  },
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
      <Experience exps={expData} />
      <Work projects={projectData} />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
