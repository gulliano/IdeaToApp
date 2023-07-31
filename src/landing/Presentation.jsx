import React from 'react'

import Fyler01 from '/images/Fyler 01.png'

const Presentation = () => {
    return (
        <section className="bg-base-100" id='Presentation'>
            <div className="min-h-screen grid items-center justify-center max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold">Le concours</h2>
                    <p className="mb-4">Dans notre démarche de toujours pousser plus loin nos capacités, nous sommes conscients de l'importance de se tourner vers un publique de professionnel et des projet extérieur.
                        Nous reconnaissons également que de nombreuses personnes regorgent d'idées novatrices, mais se voient malheureusement freinées par le manque de ressources financières ou techniques.
                    </p>

                    <p className="mb-4">C'est pour répondre à ces besoins que nous avons mis en place le concours « Idea to App » ! </p>

                    <p className="mb-4">Ainsi, nous donnerons, au cours de notre cursus, à toute personne désirant mettre en place une application innovante la possibilité de participer à notre projet pédagogique en venant présenter et défendre sa vision, son projet afin de pouvoir le réaliser gratuitement.</p>

                    <p className="mb-4">Suite à cela nos membres sélectionnerons minutieusement une liste de projets sur lesquels ils travaillerons en équipe en prenant en compte notamment le potentiel d’innovation la faisabilité et le sérieux du projet.</p>

                    {/* <p className="mb-4">Vous pouvez télécharger ici le document détaillant les condition d’organisation du concours.</p> */}
                </div>
                <div className="lg:mt-0 lg:col-span-5 lg:flex h-[70%] py-8 px-4">
                    <img src={Fyler01} alt="mockup" />
                </div>
            </div>
        </section>
    )
}

export default Presentation