import '../styles/intro.css'
import rushikesh from '../img/myPhoto-modified.png'
function Intro() {
    return (
        <div className="intro bg-grey">

            <div className="intro-text font-family-roboto">
                Hi,I'm
                <p className='dev-name'>
                    Rushikesh Falak
                </p>
                <p className='dev-role list'>
                        <ul className="t">
                            <li>ReactJs Developer</li>
                            <li>Python Developer</li>
                            <li>Full Stack Developer</li>
                        </ul>
                </p>
                <p className='dev-desc'>
                    I design and develop web apps for customers of all sizes, specializing in creating them with modern frameworks and libraries.
                </p>
            </div>
            <div className='img-container'>
                <img className='img' src={rushikesh} alt="my pic" />

            </div>

        </div>
    )
}

export default Intro