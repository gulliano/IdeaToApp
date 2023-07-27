import {  createSlice } from "@reduxjs/toolkit";

export const stagiaireSlice = createSlice({
    name : "stagiaire",
    initialState: [],
    reducers:{
        addStagiaire:(state,action )=>{
             /* ajouter un stagiaire */ 
             console.log('action' , action.payload ) ;

             return [ ...state , action.payload ] ; 

            },// end add
        editStagiaire:(state,action )=>{ 
            /* editer un stagiaire */

             },// end edit
        deleteStagiaire:(state,action )=>{ /* del  stagiaire */  
             
            return  state.filter(item => item.id != action.payload )
            
        }, // delete
    }
    
})

