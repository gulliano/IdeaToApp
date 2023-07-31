import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '/images/logo-1.png'

const footer = () => {
    return (
        <footer className="footer p-10 bg-base-100 text-base-content" id='Footer'>
            <div data-aos="fade-up">
                <img data-aos="fade-in" data-aos-delay="1500" src={Logo} width={80} height={80} alt="logo" />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
                <span className="footer-title">CDA 2023</span>
                <a className="link link-hover">About us</a>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
                <span className="footer-title">Concours</span>
                <Link to="/inscription" className="link link-hover">Inscription</Link> 
                {/* <a className="link link-hover">Contact</a> */}

            </div>
            <div data-aos="fade-up" data-aos-delay="600">
                <span className="footer-title">Legal</span>
                <Link to="/cgv" className="link link-hover">CGV</Link>
            </div>
        </footer>
    )
}

export default footer