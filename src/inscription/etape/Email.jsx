import React from 'react'
import { useDispatch } from 'react-redux'
import { plus, moins , reset } from '../../redux';

const Email = () => {
  const dispatch = useDispatch() ;
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Si tu es sélectionné, il faudra te contacter!</h1>
      <p className="py-6">Une adresse email valide est obligatoire.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Ton adresse Email</span>
          </label>
          <input type="text" placeholder="Email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Ton téléphone</span>
          </label>
          <input type="text" placeholder="06XXXXXXX" className="input input-bordered" />
          <label className="label hidden">
            Forgot password?
          </label>
        </div>
        <div className="form-control mt-6">
          <button onClick={()=>dispatch(plus()) } className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Email