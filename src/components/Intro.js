import '../styles/intro.css'
import rushikesh from '../img/rushikesh-updated-circle.jpeg'
function Intro() {
    return (
        <div className="intro bg-grey">

            <div className="intro-text font-family-roboto">
                Hi,I'm
                <p className='dev-name'>
                    Rushikesh Falak
                </p>
                {/* <p className='dev-role list'>
                        <ul className="t">
                            <li>ReactJs Developer</li>
                            <li>Python Developer</li>
                            <li>Full Stack Developer</li>
                        </ul>
                </p> */}
                <div class="dev-roles">
                    <div class="roles">
                        <div>ReactJs Developer</div>
                        <div>Python Developer</div>
                        <div>Full Stack Developer</div>
                    </div>

                    <div class="roles">
                        <div>ReactJs Developer</div>
                        <div>Python Developer</div>
                        <div>Full Stack Developer</div>
                    </div>
                </div>
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