import React from 'react'
import handleSubmit from '../commonjs/handlesubmit'; 
import { useRef } from 'react';

const Conact = () => {

    const dataRef = useRef()
 
    const submithandler = (e) => {
        e.preventDefault()
        handleSubmit(dataRef.current.value)
        dataRef.current.value = ""
    }
    
    return (
        <div className="App">
            <form onSubmit={submithandler}>
                <input type= "text" ref={dataRef} />
                <button type = "submit">Save</button>
            </form>
        </div>
    )
}

export default Conact