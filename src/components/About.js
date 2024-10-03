import '../styles/about.css'
import aboutImg from '../img/developer-dark.svg'
function About() {
    return (
        <div className="container color-white" id='about'>
            <div className='about-section small-text font-family-roboto'>
                <img className='aboutImg' src={aboutImg} alt='about-img' />
                <div className='aboutText small-text font-family-roboto'>

                    <p className='big-text color-wheat'>
                        ABOUT
                    </p>
                    <p>

                        I'm Rushikesh, a passionate Web Developer bringing you programming and design from the future. I am experienced in developing web applications including full front end design.
                    </p>
                    <p className='resume-btn'>
                        <i className="fa-solid fa-download"></i>
                        <span>Downlaod Resume</span>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About