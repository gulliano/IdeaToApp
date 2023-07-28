import React from 'react'
import handleSubmit from '../commonjs/handlesubmit'; 
import { useRef } from 'react';

const Conact = () => {

    const dataRef = useRef()
 
    const submithandler = (e) => {
        e.preventDefault()
      const  { nom ,  prenom , email , message} = e.target ;
      console.log(' nom ,  prenom , email , message' ,  nom.value ,  prenom.value , email.value , message.value) ; 
        handleSubmit(nom.value ,  prenom.value , email.value , message.value)
       dataRef.current.value = ""
    }
    
    return (
        <div className="App">
            <form onSubmit={submithandler}>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center min-w-lg lg:text-left">
                            <h1 className="text-5xl font-bold">Contactez-nous !</h1>
                            <p className="py-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At repellendus unde ut, perspiciatis expedita dicta?</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-lg min-h-fit shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <input type="text" ref={dataRef} name="nom" placeholder="Nom" className="input input-bordered" />  
                                </div>

                                <div className="form-control">
                                    <input type="text" ref={dataRef} name="prenom" placeholder="Prenom" className="input input-bordered" />  
                                </div>

                                <div className="form-control">
                                    <input type="text" ref={dataRef} name="email" placeholder="Email" className="input input-bordered" />  
                                </div>
        
                                <div className="form-control">
                                    <textarea type="text" ref={dataRef} name="message" placeholder="Saisie ton message" className="textarea textarea-bordered w-full resize-none rows-15 cols-70"/>
                                </div>
                                <div className="form-control mt-6">
                                    <button type = "submit" className="btn btn-primary">Envoyer</button>
                                </div>
      </div>
    </div>
  </div>
</div>
            </form>
        </div>
    )
}

export default Conact