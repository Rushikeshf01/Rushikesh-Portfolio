import '../styles/about.css'
// import aboutImg from '../img/img2.jpg'
import aboutImg from '../img/samurai.webp'
// import aboutImg from '../img/rushikesh.jpg'
function About() {
    return (

        <div className="container color-white" id='about'>
            <div className='aboutImgContainer'>
                <img className='aboutImg' src={aboutImg} alt='about-pic'/>
            </div>
            <div className='aboutText'>
                <p className='big-text'>
                    ABOUT
                </p>
                I'm Rushikesh, a passionate Web Developer bringing you programming and design from the future. I am experienced in developing web applications including full front end design.
                <p className='resume-btn'>
                <i class="fa-solid fa-download"></i>
                    <span>Downlaod Resume</span> 
                </p>
            </div>

        </div>
    )
}

export default About