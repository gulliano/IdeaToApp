import React from 'react'
import { useDispatch } from 'react-redux'
import { plus, moins , reset } from '../../redux';

const Presentation = () => {
  const dispatch = useDispatch() ;
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Pour commencer présente toi ?</h1>
      <p className="py-6">Nous devons savoir qui tu es !</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Mon nom</span>
          </label>
          <input type="text" placeholder="Mon nom" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Mon prénom</span>
          </label>
          <input type="text" placeholder="Mon Prénom" className="input input-bordered" />
          <label className="label hidden">
                Forgot password? 
          </label>
        </div>
        <div className="form-control mt-6">
          <button onClick={()=>dispatch(plus()) } className="btn btn-primary">Etape suivante </button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Presentation