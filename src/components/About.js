import '../styles/about.css'
import aboutImg from '../img/developer-dark.svg'
function About() {
    const driveFileLink = "https://drive.google.com/file/d/1op6Bvmmnua11Clj9uUzlc8gQOj4TNg8n/view?usp=drive_link";
    const handleDownload = () => {
    const link = document.createElement('a');
    link.href = driveFileLink;
        link.download = "rushikesh_falak_resume"; // Optional: Provide a name for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
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
                        <button onClick={handleDownload}>

                        <i className="fa-solid fa-download"></i>
                        <span>Downlaod Resume</span>
                        </button>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About