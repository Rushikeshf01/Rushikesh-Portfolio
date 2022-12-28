import '../styles/intro.css'
import rushikesh from '../img/rushikesh.jpg'
function Intro() {
    return (
        <div className="intro bg-grey">

            <div className="intro-text">
                <p className='big-text'>

                    Hi, I'm Rushikesh Falak
                </p>
                <p className='small-intro-text'>
                    ReactJs Developer
                </p>
            </div>
            <div className='img-container'>
                <img className='img' src={rushikesh} alt="my pic" />

            </div>

        </div>
    )
}

export default Intro