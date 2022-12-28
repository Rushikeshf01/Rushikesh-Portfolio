import React from 'react'
import '../styles/footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-icon">
                <a href='https://github.com/Rushikeshf01'><i className="fa-brands fa-github"></i></a>
                <a href='https://www.linkedin.com/in/rushikesh-falak-14604a203/'><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://twitter.com/FalakRushikesh?t=p6T1SFmbEqVFS9lGQrxcrQ&s=09"><i className="fa-brands fa-twitter"></i></a>
            </div>
            <p className='small-text'>
            Copyright © 2022 Rushikesh Falak. All Rights Reserved.
            </p>
        </div>
    )
}

export default Footer
