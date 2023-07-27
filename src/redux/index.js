import { configureStore } from "@reduxjs/toolkit" ;


import { stagiaireSlice } from "./stagiaireStore";
import { etapeSlice } from "./etapeStore";
 

// actions creator 
export  const { plus, moins , reset} = etapeSlice.actions ; 
export  const { addStagiaire , editStagiaire , deleteStagiaire } = stagiaireSlice.actions ;


export const store = configureStore({
    reducer:{
        stagiaires: stagiaireSlice.reducer,
        etape : etapeSlice.reducer ,
    },
})