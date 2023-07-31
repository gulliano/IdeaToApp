import React from 'react'
import handleSubmit from '../commonjs/handlesubmit';
import { useRef, useState } from 'react';



const Contact = () => {

    const [errorNom, setErrorNom] = useState(false);
    const [errorPrenom, setErrorPrenom] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const dataRef = useRef()

    const submithandler = (e) => {
        e.preventDefault()
        const { nom, prenom, email, message } = e.target;
        console.log(' nom ,  prenom , email , message', nom.value, prenom.value, email.value, message.value);


        // Vérification des champs, si les champs sont vide on affiche le error
        (nom.value == "") ? setErrorNom(true) : setErrorNom(false);
        (prenom.value == "") ? setErrorPrenom(true) : setErrorPrenom(false);
        (email.value == "") ? setErrorEmail(true) : setErrorEmail(false);
        (message.value == "") ? setErrorMessage(true) : setErrorMessage(false);

        if (!(errorNom && errorPrenom && errorEmail && errorMessage)) {
            handleSubmit(nom.value, prenom.value, email.value, message.value)
            dataRef.current.value = ""
        }

        //     handleSubmit(nom.value ,  prenom.value , email.value , message.value)
        //    dataRef.current.value = ""
    }

    return (
        <div className="App">
            <form onSubmit={submithandler}>
                <div className="hero min-h-screen bg-base-100">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center min-w-lg lg:text-left">
                            <h1 className="text-5xl font-bold">Contactez-nous !</h1>
                            <p className="py-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At repellendus unde ut, perspiciatis expedita dicta?</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-lg min-h-fit shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <input type="text" ref={dataRef} name="nom" placeholder="Nom" className="input input-bordered" />
                                    {errorNom && <label className="label">
                                        <span className="label-text-alt text-pink-600">Vous devez saisir votre nom !</span>
                                    </label>}
                                </div>

                                <div className="form-control">
                                    <input type="text" ref={dataRef} name="prenom" placeholder="Prenom" className="input input-bordered" />
                                    {errorPrenom && <label className="label">
                                        <span className="label-text-alt text-pink-600">Vous devez saisir votre prenom !</span>
                                    </label>}
                                </div>

                                <div className="form-control">
                                    <input type="text" ref={dataRef} name="email" placeholder="Email" className="input input-bordered" />
                                    {errorEmail && <label className="label">
                                        <span className="label-text-alt text-pink-600">Votre email est obligatoire !</span>
                                    </label>}
                                </div>

                                <div className="form-control">
                                    <textarea type="text" ref={dataRef} name="message" placeholder="Saisie ton message" className="textarea textarea-bordered w-full resize-none rows-15 cols-70" />
                                    {errorMessage && <label className="label">
                                        <span className="label-text-alt text-pink-600">Merci de saisir votre message !</span>
                                    </label>}
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">Envoyer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact