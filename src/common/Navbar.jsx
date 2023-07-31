import React from 'react'

import Logo from '/images/logo-1.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 fixed z-50" id='Navbar'>
            <div className="navbar-start">

                <img data-aos="fade-in" data-aos-delay="1500" src={Logo} width={80} height={80} alt="logo" />
            </div>
            <div className="navbar-center hidden lg:flex">

            </div>
            <div data-aos="fade-in" data-aos-delay="1500" className="navbar-end">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li ><a>Accueil</a></li>
                        <li><a>Concours</a></li>
                        <li><a>Qui sommes nous?</a></li>
                        <li><a>Inscription</a></li>
                        <li><a>CGV</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar