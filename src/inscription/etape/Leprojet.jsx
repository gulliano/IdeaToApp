import React , {useState} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { plus,reset ,   addInscription } from '../../redux';
import handleInscription from '../../commonjs/handlesInsciption';


const Leprojet = () => {
  
  const dispatch = useDispatch() ;
  const {inscription }  =  useSelector(state=> state) ;

  const [projet, setProjet] = useState('')


  const [errProjet, setErrProjet] = useState(false)


  const handleSubmit = (event) => { 
    event.preventDefault() ;
    
    //const { email , telephone} =  event.target ;
    console.log('prenom :  ' , inscription ) ;


   const info = { projet : projet, }

  
   
      if(projet == ''){
        setErrProjet(true)
      }else{
        dispatch(addInscription(info)) ; 
       

        handleInscription(inscription ) ;
         window.my_modal_1.showModal() ;
         
      }
    
      

    }

    const changeProjet = (event) => {
      setProjet(event.target.value);
      event.target.value =='' ? setErrProjet(true):setErrProjet(false) ;
    }


    const closeModal = () => { 

      dispatch(addInscription({})) ; 
      dispatch(reset() ) ;

     }

  return (
    <div className="hero min-h-screen ">
    <form onSubmit={handleSubmit} >
      <div className="flex items-center justify-center">
              <ul className="steps">
                <li className="step step-primary">Présentation </li>
                <li className="step step-primary">Contact</li>
                <li className="step step-primary">Motivation</li>
                <li className="step step-primary">Le projet</li>
              </ul>
            </div>
      <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Parles nous de ton projet ! </h1>
        <p className="py-2 text-2xl">  A qui s’adresse ton projet ? </p>
        <p className="py-2 text-2xl"> A quel besoin souhaites-tu répondre ? </p>
        <p className="py-2 text-2xl">Comment comptes-tu faire la différence ?</p>
      </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Tes projets</span>
              </label>
              
              <textarea type="text" value={projet} onChange={e=>changeProjet(e)} name="projet" placeholder="Projet" className="textarea textarea-bordered w-full resize-none rows-15 cols-100"/>        
              {errProjet&&<label className="label  text-red-500">Il est important de nous parler du projet</label>}
            </div>
          
            <div className="form-control mt-6">
              <button type='submit' className="btn btn-primary">Soumettre</button>
            </div>
          </div>
        </div>
      </div>
    </form>

      {/* Open the modal using ID.showModal() method */}

      <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg text-title">Salut ! 😄 </h3>
                    <p className="py-4">Ton projet a bien été envoyer, nous te répondrons dans les meilleurs délais</p>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={closeModal} className="btn btn-primary">Fermer</button>
                    </div>
                </form>
            </dialog>
</div>
  )
}

export default Leprojet