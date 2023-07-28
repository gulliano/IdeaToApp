import React from 'react'

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-100" id='Hero'>
            <div className="hero-content text-center">
                <div className="flex-col">
                    <h4 data-aos="fade-right" className="text-title">Concours </h4>
                    <h1 data-aos="fade-right" className="text-neutral-600 text-5xl font-bold">Une Idée, Une App</h1>
                    <p data-aos="fade-left" className="py-6 text-5xl font-bold">Gagne la réalisation de ton app</p>
                    <div className='flex gap-4 items-center justify-center' data-aos="fade-in" data-aos-delay="1500">
                        <button className="btn btn-primary">Je participe</button>
                        <button className="btn btn-outline btn-primary">Plus d’informations</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero