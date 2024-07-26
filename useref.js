import React,{ useRef } from 'react'

export default function UseRef() {

    const inputRef = useRef();
    function changeWidth(){
        inputRef.current.style.width = '300px';
        inputRef.current.style.height = "100px";
        inputRef.current.style.color = 'red';
        
    }

  return (
    <>
        <input type='text' ref={inputRef} />
    <button onClick={changeWidth}>click</button>
    </>
  )
}
