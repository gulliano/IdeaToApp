import { configureStore } from "@reduxjs/toolkit" ;


import { inscriptionSlice } from "./inscriptionStore";
import { etapeSlice } from "./etapeStore";
 

// actions creator 
export  const { plus, moins , reset} = etapeSlice.actions ; 
export  const { addInscription } = inscriptionSlice.actions ;


export const store = configureStore({
    reducer:{
        inscription: inscriptionSlice.reducer,
        etape : etapeSlice.reducer ,
    },
})