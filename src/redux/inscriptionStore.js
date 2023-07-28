import {  createSlice } from "@reduxjs/toolkit";

export const inscriptionSlice = createSlice({
    name : "inscription",
    initialState: {},
    reducers:{
        addInscription:(state,action )=>{
             /* ajouter un stagiaire */ 
             console.log('action' , action.payload ) ;

             return  {...state , ...action.payload } ; 

            },// end add
        
    }
    
})

