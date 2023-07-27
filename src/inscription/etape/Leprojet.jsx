import React from 'react'
import { useDispatch } from 'react-redux'
import { plus, moins , reset } from '../../redux';

const Leprojet = () => {
  const dispatch = useDispatch() ;

  return (
    <div className="hero min-h-screen bg-base-200">
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
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
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

export default Leprojet