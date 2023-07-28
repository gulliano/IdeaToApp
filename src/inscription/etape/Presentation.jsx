import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import { plus,  addInscription } from '../../redux';


const Presentation = () => {
  const dispatch = useDispatch() ;

  const [nom, setNom] = useState('gustave')
  const [prenom, setPrenom] = useState('gulliano')

  const handleSubmit = (event) => { 
    event.preventDefault() ;
    
  //const { nom , prenom} =  event.target ;
  console.log('prenom :  ' ,event.target  ) ;


   const info = { nom : nom, 
                  prenom : prenom,
                            
      }

    const changeNom = (event) => {
      setNom(event.target.value)
    }
        console.log("infoStagiaire" , info) 
      dispatch(addInscription(info)) ; 
   // dispatch(plus())

   }

  return (
    <div className="hero min-h-screen bg-base-200">
      <form onSubmit={handleSubmit} >
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Pour commencer présente toi ?</h1>
      <p className="py-6">Nous devons savoir qui tu es !</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Ton nom</span>
          </label>
          <input type="text"  onChange={event=>changeNom(event)} value={nom}  name='prenom' placeholder="Nom"   className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Ton prénom</span>
          </label>
          <input type="text"   onChange={event=>setPrenom(event.target.value)} value={prenom}  name='prenom' placeholder="Prénom" className="input input-bordered" />
          <label className="label hidden">
               Tu dois saissir ton prénom 
          </label>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Etape suivante </button>
        </div>
      </div>
    </div>
  </div>
  </form>
</div>
  )
}

export default Presentation