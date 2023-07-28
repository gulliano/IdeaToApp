import React , {useState} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { plus,  addInscription } from '../../redux';


const Motivation = () => {
  
  const dispatch = useDispatch() ;
  const {inscription }  =  useSelector(state=> state) ;

  const [motivation, setMotivation] = useState(' message de motivation')


  const [errMotivation, setErrMotivation] = useState(false)


  const handleSubmit = (event) => { 
    event.preventDefault() ;
    
    //const { email , telephone} =  event.target ;
    console.log('prenom :  ' , inscription ) ;


   const info = { motivation : motivation, 
                            
      }

   
      
      dispatch(addInscription(info)) ; 
      dispatch(plus())
      

    }

    const changeMotivation = (event) => {
      setMotivation(event.target.value);
      event.target.value =='' ? setErrMotivation(true):setErrMotivation(false) ;
    }


  return (
    <div className="hero min-h-screen bg-base-200">
    <form onSubmit={handleSubmit} >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Quelle sont tes motivations ?</h1>
          <p className="py-6">Dit nous ce qui te motive pour réaliser ton projet?</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Tes motivations</span>
              </label>
              
              <textarea type="text" value={motivation} onChange={e=>changeMotivation(e)} name="motivation" placeholder="Motivation" className="textarea textarea-bordered w-full resize-none rows-15 cols-100">
                
               

              </textarea>
          
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

export default Motivation