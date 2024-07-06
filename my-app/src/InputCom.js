import React from 'react'

import {useState} from 'react';


const InputCom = (props) => {
    const[color,setColor]=useState('');

    

    return (
        <>
            <section className='input'>
                <form onSubmit={(e)=> { e.preventDefault()
                    props.fun(color)}}>
                    <h1>Generate Color</h1>
                    <section className='input-section'>
                        <input style={{borderColor:props.color}} placeholder='#222' value={color} onChange={(e) => { 
                          
                            setColor(e.target.value) }}></input>
                        <button type='Submit' > Submit</button>
                    </section>

                </form>
            </section>
        </>
    )
}


export default InputCom






