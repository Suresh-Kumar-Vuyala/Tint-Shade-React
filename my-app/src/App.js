// import React from 'react';
import './App.css';
import {useState} from 'react';
import InputCom from './InputCom'
import Values from 'values.js'
import ColorBox from './ColorBox';



function App() {
  
  const[colorList,setColorList]=useState([]);
  const[error,setError]=useState(false);


  const changeColor=(color)=>{
    try {
      let colors = new Values(color).all(10)
      setColorList(colors)
      setError(false)
      console.log(colors)
    } catch (error) {
      setError(true)
      setColorList([])
      console.log(error)
    }
  }
  return (
   <>
  
   <InputCom fun={changeColor} color={(error)?'red':null}></InputCom>
   <section className='list-section'>
   
   {colorList.map((data,index)=>{
     console.log(index+"--")
       return (
      
          <ColorBox key={index} data={data} index={index} ></ColorBox>
       )
   })}
   
   {error && <p style={{color:'red',margin:'auto',fontSize:'2rem'}}>Invalid Hex Value</p>}
  


    
    </section>

    
   </>
  );
}

export default App;
