import { useState,useEffect } from 'react';
import React from 'react';



const ColorBox = (props) => {
    const[alert,setAlert]=useState(false);
    let color=props.data.rgb.join(',')

    const style={
        backgroundColor:`rgb(${color})`
    }
    const fun=(hex)=>{
        setAlert(true)
        navigator.clipboard.writeText(`#${hex}`);
    }
    useEffect(()=>{
       var C= setTimeout(()=>{
               setAlert(false);
        },2000)
        return (()=>clearTimeout(C));
    },[alert])

    return (
        <>
        <section className='box-section' style={style}  onClick={()=>{fun(props.data.hex)}}>
       <p style={{color:(props.data.type==='tint')?'black':'white'}}>{props.data.weight}%</p>
       <p style={{color:(props.data.type==='tint')?'black':'white'}}>#{props.data.hex}</p>
       {alert && <p style={{color:(props.data.type==='tint')?'black':'white'}} >COPIED TO CLIPBOARD</p>}

            
        </section>
        </>
    )
}


export default ColorBox;