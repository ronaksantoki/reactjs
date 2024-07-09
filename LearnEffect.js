import React, { useEffect, useState } from 'react'

export default function LearnEffect() {

    const [textbox,setTextBox] = useState('');
  const [numberbox,setNumberBox] = useState('');
  var [datebox,setdatebox] = useState('');
    function handleTextBox( event ){
        setTextBox(event.target.value);
    }
    function handleNumberBox(event){
      setNumberBox(event.target.value);
    }
    function handleDate(event){
      setdatebox(event.target.value);
    }

      return (
   <>
  <p>enter any text</p> <input type='text' onChange={handleTextBox} value={textbox}/><br/>
    <p>enter any number</p><input type='number' onChange={handleNumberBox} value={numberbox}/>
    <p>enter date</p><input type='date' onChange={handleDate} value={datebox}/>
   <h3>{textbox}</h3>
   <h1>{numberbox}</h1>
   <h3>{datebox}</h3>
   
   </>
  )
}
