import React , {useState} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { plus,  addInscription } from '../../redux';
import handleInscription from '../../commonjs/handlesInsciption';


const Leprojet = () => {
  
  const dispatch = useDispatch() ;
  const {inscription }  =  useSelector(state=> state) ;

  const [projet, setProjet] = useState(' message de projet')


  const [errProjet, setErrProjet] = useState(false)


  const handleSubmit = (event) => { 
    event.preventDefault() ;
    
    //const { email , telephone} =  event.target ;
    console.log('prenom :  ' , inscription ) ;


   const info = { projet : projet, 
                            
      }

   
      console.log("infoStagiaire" , info) 
      dispatch(addInscription(info)) ; 

      handleInscription(inscription ) ;
      //dispatch(plus())

    }

    const changeProjet = (event) => {
      setProjet(event.target.value);
      event.target.value =='' ? setErrProjet(true):setErrProjet(false) ;
    }


  return (
    <div className="hero min-h-screen ">
    <form onSubmit={handleSubmit} >
      <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Parles nous de ton projet ! </h1>
        <p className="py-6">  A qui s’adresse ton projet ? </p>
        <p className="py-6"> A quel besoin souhaites-tu répondre ? </p>
        <p className="py-6">Comment compte tu faire la différence ?</p>
      </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Tes projets</span>
              </label>
              
              <textarea type="text" value={projet} onChange={e=>changeProjet(e)} name="projet" placeholder="Projet" className="textarea textarea-bordered w-full resize-none rows-15 cols-100"/>        
            </div>
          
            <div className="form-control mt-6">
              <button className="btn btn-primary">Etape suivante</button>
            </div>
          </div>
        </div>
      </div>
    </form>
</div>
  )
}

export default Leprojet