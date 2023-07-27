import React from 'react'
import { useSelector } from 'react-redux'



import Presentation from './etape/Presentation'
import Email from './etape/Email'
import Motivation from './etape/Motivation'
import Leprojet from './etape/Leprojet'

const Inscription = () => {


  const {etape} = useSelector(state => state); // recupération de la valeur dans le store
console.log("etat" , etape)

    return (
      <> 
  {(() => {
        switch (etape) {
          case 1:
            return <Presentation />;
          case 2:
            return <Email />;
          case 3:
            return <Motivation />;
          case 4:
              return <Leprojet/>;  
          default:
            return <Presentation />;
        }
      })()}

      
      </>
        

    )
}

export default Inscription