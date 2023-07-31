import React from 'react'
import handleSubmit from '../commonjs/handlesubmit'; 
import { useRef , useState } from 'react';



const Contact = () => {

    // Création des variables pour les messages error
    const [errorNom, setErrorNom] = useState(false);
    const [errorPrenom, setErrorPrenom] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    // Création des variables pour le state
    const [fnom, setNom] = useState("");
    const [fprenom, setPrenom] = useState("");
    const [femail, setEmail] = useState("");
    const [fmessage, setMessage] = useState("");

    const dataRef = useRef()
 
    const submithandler = (e) => {
        e.preventDefault()
        const  { nom ,  prenom , email , message} = e.target ;
        console.log(' nom ,  prenom , email , message' ,  nom.value ,  prenom.value , email.value , message.value) ; 
    

       // Vérification des champs, si les champs sont vide on affiche le error
      (nom.value == "")?setErrorNom(true):setErrorNom(false) ;
      (prenom.value == "")?setErrorPrenom(true):setErrorPrenom(false) ;
      (email.value == "")?setErrorEmail(true):setErrorEmail(false) ;
      (message.value == "")?setErrorMessage(true):setErrorMessage(false) ;

      if(nom.value || prenom.value || email.value || message.value){
        handleSubmit(nom.value ,  prenom.value , email.value , message.value)
        dataRef.current.value = ""
        window.my_modal_1.showModal() // Affichage du modal lors de l'envoi
        setNom("") ;
        setPrenom("") ;
        setEmail("") ;
        setMessage("") ;
      }
      console.log(errorNom || errorPrenom || errorEmail || errorMessage)

    //     handleSubmit(nom.value ,  prenom.value , email.value , message.value)
    //    dataRef.current.value = ""
    }
    
    return (
        <div className="App">
            <form onSubmit={submithandler}>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center min-w-lg lg:text-left">
                            <h1 className="text-5xl font-bold text-title">Contactez-nous !</h1>
                            <p className="py-6">Envie de plus d’explications ou de précisions sur le concours ? <br /> <br />
                             N’hésite pas, envoie nous un message via le formulaire ci-contre pour des éclaircissements</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-lg min-h-fit shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <input type="text" ref={dataRef} value={fnom} onChange={(event=>setNom(event.target.value))} name="nom" placeholder="Nom" className="input input-bordered text-title-secondary" />
                                    {errorNom&&<label className="label">
                                        <span className="label-text-alt text-error">Vous devez saisir votre nom !</span>
                                    </label>}
                                </div>

                                <div className="form-control">
                                    <input type="text" ref={dataRef} value={fprenom} onChange={(event=>setPrenom(event.target.value))} name="prenom" placeholder="Prenom" className="input input-bordered text-title-secondary" />
                                    {errorPrenom&&<label className="label">
                                        <span className="label-text-alt text-error">Vous devez saisir votre prenom !</span>
                                    </label>}  
                                </div>

                                <div className="form-control">
                                    <input type="text" ref={dataRef} value={femail} onChange={(event=>setEmail(event.target.value))} name="email" placeholder="Email" className="input input-bordered text-title-secondary" />
                                    {errorEmail&&<label className="label">
                                        <span className="label-text-alt text-error">Votre email est obligatoire !</span>
                                    </label>}  
                                </div>
        
                                <div className="form-control">
                                    <textarea type="text" ref={dataRef} value={fmessage} onChange={(event=>setMessage(event.target.value))} name="message" placeholder="Saisie ton message" className="textarea textarea-bordered w-full resize-none rows-15 cols-70 text-title-secondary"/>
                                    {errorMessage&&<label className="label">
                                        <span className="label-text-alt text-error">Merci de saisir votre message !</span>
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

            {/* Open the modal using ID.showModal() method */}

            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg text-title">Salut ! 😄 </h3>
                    <p className="py-4">Ton message a bien été envoyer, nous te répondrons dans les meilleurs délais</p>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-primary">Fermer</button>
                    </div>
                </form>
            </dialog>
        </div>
    )
}

export default Contact