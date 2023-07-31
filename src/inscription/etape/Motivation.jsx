import React , {useState} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { plus,  addInscription } from '../../redux';


const Motivation = () => {
  
  const dispatch = useDispatch() ;
  const {inscription }  =  useSelector(state=> state) ;

  const [motivation, setMotivation] = useState('')


  const [errMotivation, setErrMotivation] = useState(false)


  const handleSubmit = (event) => { 
    event.preventDefault() ;
    
    //const { email , telephone} =  event.target ;
    console.log('prenom :  ' , inscription ) ;


   const info = { motivation : motivation,  }

   
      if(motivation == ''){
        setErrMotivation(true)
      }else{
        dispatch(addInscription(info)) ; 
        dispatch(plus())
      }
      
      

    }

    const changeMotivation = (event) => {
      setMotivation(event.target.value);
      event.target.value =='' ? setErrMotivation(true):setErrMotivation(false) ;
    }


  return (
    <div className="hero min-h-screen ">
    <form onSubmit={handleSubmit} >
      <div className="flex items-center justify-center">
            <ul className="steps">
              <li className="step step-primary">Présentation </li>
              <li className="step step-primary">Contact</li>
              <li className="step step-primary">Motivation</li>
              <li className="step">Le projet</li>
            </ul>
          </div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Quelles sont tes motivations ?</h1>
          <p className="py-6 text-2xl">Dis nous ce qui te motives pour réaliser ton projet ?</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Tes motivations</span>
              </label>
              
              <textarea type="text" value={motivation} onChange={e=>changeMotivation(e)} name="motivation" placeholder="Motivation" className="textarea textarea-bordered w-full resize-none rows-15 cols-100">
                
               

              </textarea>

              
              {errMotivation&&<label className="label  text-red-500">Il est important de nous dire tes motivations</label>}
          
            </div>
          
            <div className="form-control mt-6">
              <button type='submit' className="btn btn-primary">Etape suivante</button>
            </div>
          </div>
        </div>
      </div>
    </form>
</div>
  )
}

export default Motivation