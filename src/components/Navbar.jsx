import React, { useState } from 'react'
import '../styles/navbar.css'


function Navbar() {
    const [IsNavExpanded, setIsNavExpanded] = useState(false);
    const handleMenu = () => {
        if (!IsNavExpanded) {
            setIsNavExpanded(true);
        } else {
            setIsNavExpanded(false);
        }
    };

    const navigation = [
        {link: '#about', text:'About'},
        {link: '#work', text:'Work'},
        {link: '#contact', text:'Contact'},
    ];
    return (
        <nav className='navbar'>
            <div className="name">
                <a href='/' className='color-wheat'>Rushikesh</a>
            </div>
            <button className="hamburger" onClick={handleMenu}>
                <i className="fa-solid fa-bars"></i>
            </button>
            <div className={
                IsNavExpanded ? "nav-menu expanded" : "nav-menu"
            }>
                <ul>
                    {navigation.map((nav)=> ( <li key={nav.text}>
                        <a href={nav.link} className='color-wheat'>{nav.text}</a>
                    </li> ))}
                    <li>

                        <a href='https://github.com/Rushikeshf01' className='color-wheat'><i className="fa-brands fa-github"></i></a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/rushikesh-falak-14604a203/' className='color-wheat'><i className="fa-brands fa-linkedin"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar