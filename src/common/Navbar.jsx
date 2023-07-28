import React from 'react'

import Logo from '/images/logo-1.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 fixed z-50" id='Navbar'>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li ><a>Accueil</a></li>
                        <li><a>Concours</a></li>
                        <li><a>Qui sommes nous?</a></li>
                        <li><a>Inscription</a></li>
                        <li><a>CGV</a></li>
                    </ul>
                </div>
                <img data-aos="fade-in" data-aos-delay="1500" src={Logo} width={80} height={80} alt="logo" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li data-aos="fade-in" data-aos-delay="600"><a>Accueil</a></li>
                    <li data-aos="fade-in" data-aos-delay="600"><a>Concours</a></li>
                    <li data-aos="fade-in" data-aos-delay="600"><a>Qui sommes nous?</a></li>
                    <li data-aos="fade-in" data-aos-delay="600"><a>Inscription</a></li>
                    <li data-aos="fade-in" data-aos-delay="600"><a>CGV</a></li>
                </ul>
            </div>
            <div data-aos="fade-in" data-aos-delay="1500" className="navbar-end">
                <a className="btn btn-outline btn-primary">Contact</a>
            </div>
        </div>
    )
}

export default Navbar