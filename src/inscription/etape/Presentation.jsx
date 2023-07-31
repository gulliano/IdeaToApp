
import React, { useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { plus, addInscription } from '../../redux';


const Presentation = () => {
  const dispatch = useDispatch();
  const {etape }  =  useSelector(state=> state) ;

  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')

  const [errNom, setErrNom] = useState(false)
  const [errPrenom, setErrPrenom] = useState(false)

  
  const handleSubmit = (event) => {
    event.preventDefault();

    //const { nom , prenom} =  event.target ;
    console.log('prenom :  ', event.target);
    if (nom == '') {
      setErrNom(true)
    }
    if (prenom == '') {
      setErrPrenom(true)
    }

    const info = {
      nom: nom,
      prenom: prenom,
    }

    if (prenom != '' && nom != '') {
      dispatch(addInscription(info));
      dispatch(plus())
    }
  }

  const changeNom = (event) => {
    setNom(event.target.value);
    event.target.value == '' ? setErrNom(true) : setErrNom(false);
  }
  const changePrenom = (event) => {
    setPrenom(event.target.value);
    event.target.value == '' ? setErrPrenom(true) : setErrPrenom(false);
  }

  return (
    <div className="hero min-h-screen ">

      <form onSubmit={handleSubmit} >
        <div className="flex items-center justify-center">
          <ul className="steps">
            <li className="step step-primary">Présentation </li>
            <li className="step">Contact</li>
            <li className="step">Motivation</li>
            <li className="step">Le projet</li>
          </ul>
        </div>
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
                <input type="text" onChange={event => changeNom(event)} value={nom} name='prenom' placeholder="Nom" className="input input-bordered" />
                {errNom && <label className="label text-red-500">
                  Tu dois saisir ton nom
                </label>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Ton prénom</span>
                </label>
                <input type="text" onChange={event => changePrenom(event)} value={prenom} name='prenom' placeholder="Prénom" className="input input-bordered" />
                {errPrenom && <label className="label text-red-500">
                  Tu dois saisir ton prénom
                </label>}
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