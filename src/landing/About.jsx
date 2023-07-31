import React from 'react'

const About = () => {
    return (
        <section className="">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold">Qui est la Team CDA?</h2>
                    <p className="mb-4">La team CDA est un groupe émergent de Concepteurs Développeurs d'Applications en formation permanente, passionnés par le monde du web. Unis par notre volonté commune d’atteindre l'excellence dans notre domaine, nous travaillons ensemble à approfondir et affiner nos connaissances et compétences.</p>

                    <p className="mb-4">Ensemble, nous explorons les technologies qui façonnent le web afin de repousser sans cesse nos limites dans l'innovation. Notre objectif est de créer des applications web et mobile de qualité, tout en restant à l'affût des évolutions de notre industrie.</p>

                    <p className="mb-4">La team CDA, c'est une aventure collective, stimulante et prometteuse dans l'univers fascinant du développement d’applications.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
                </div>
            </div>
        </section>
    )
}

export default About