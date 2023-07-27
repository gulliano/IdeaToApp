import React from 'react'

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200" id='Hero'>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 data-aos="fade-right" className="text-5xl font-bold">Hello there</h1>
                    <p data-aos="fade-left" className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero