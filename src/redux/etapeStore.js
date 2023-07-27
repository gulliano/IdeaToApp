import {  createSlice } from "@reduxjs/toolkit";

export const etapeSlice = createSlice({
    name : "etape",
    initialState: 0,
    reducers:{
        plus:(state,action ) => { return state + 1  ; /* ajouter un stagiaire */  },
        moins:(state,action ) => { return state > 1 ? state - 1 : 0  /* editer un stagiaire */  },
        reset : ( state , action ) => { return 0 ;}
    }
    
})

