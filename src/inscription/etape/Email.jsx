import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { plus, addInscription } from '../../redux';
import { validateEmail } from '../../commonjs/function';

const Email = () => {
  const dispatch = useDispatch();
  const { inscription } = useSelector(state => state);

  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')

  const [errEmail, setErrEmail] = useState(false)
  const [errTelephone, setErrTelephone] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();

    //const { email , telephone} =  event.target ;
    
    if (validateEmail(email) == null  ) {
      setErrEmail(true)
    }
    if (telephone == '') {
      setErrTelephone(true)
    }

    const info = {
      email: email,
      telephone: telephone,
    }
  //  console.log('prenomc :  ', telephone , email,  validateEmail(email) , errEmail , errTelephone );
    if (validateEmail(email) != null   && telephone != '') {
     // console.log("infoStagiaire", info)
      dispatch(addInscription(info));
      dispatch(plus())
    }

  }

  const changeEmail = (event) => {
    setEmail(event.target.value);
    event.target.value == '' ? setErrEmail(true) : setErrEmail(false);
  }
  const changeTelephone = (event) => {
    setTelephone(event.target.value);
    event.target.value == '' ? setErrTelephone(true) : setErrTelephone(false);
  }

  return (
    <div className="hero min-h-screen ">

      <form onSubmit={handleSubmit} >
        <div className="flex items-center justify-center">
          <ul className="steps">
            <li className="step step-primary">Présentation</li>
            <li className="step step-primary">Contact</li>
            <li className="step">Motivation</li>
            <li className="step">Le projet</li>
          </ul>
        </div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Si tu es sélectionné(e), il faudra te contacter!</h1>
            <p className="py-6 text-2xl">Une adresse email valide est obligatoire.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Ton adresse Email </span>
                </label>
                <input type="text" value={email} onChange={event => changeEmail(event)} placeholder="Email" className="input input-bordered" />
            
                {errEmail&&<label className="label  text-red-500">Une adresse email valide est obligatoire</label>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Ton téléphone</span>
                </label>
                <input type="text" value={telephone} onChange={event => changeTelephone(event)} placeholder="06XXXXXXX" className="input input-bordered" />
                {errTelephone&&<label className="label  text-red-500">Un numéro de téléphone est obligatoire</label>}
              
              </div>
              <div className="form-control mt-6">
                <button  type='submit' className="btn btn-primary">Etape suivante</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Email