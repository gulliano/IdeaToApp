import React from 'react'

import Fyler01 from '/images/Fyler 01.png'

const Presentation = () => {
    return (
        <section className="bg-base-100">
            <div className="min-h-screen grid items-center justify-center max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">Payments tool for software companies</h1>
                    <p className="max-w-2xl mb-6 font-light">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 btn btn-primary">
                        Get started
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                    </a>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 btn btn-secondary">
                        Speak to Sales
                    </a>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex h-[70%]">
                    <img src={Fyler01} alt="mockup"/>
                </div>
            </div>
        </section>
    )
}

export default Presentation