import './App.css'
import { useState } from 'react';



function App(){

const [count,setCount]= useState(0)
  function decreaseHandler(){
    setCount( count -1 );

  }
  function increaseHandler(){
    setCount(count + 1)  ;

  }
  function resetHandler(){
    setCount(0);
  }

  return (

    <div className="main">
      <div className='head'>Increment & Decrement </div>
      <div className='section'>
        <button onClick={decreaseHandler} className='btn1 bt1'>+</button>
        <div className='display'>{count}</div>
        <button  onClick={increaseHandler} className='btn1 bt2'>-</button>
       
      </div>
      <button className='reset' onClick={resetHandler}>Reset</button>
    </div>



 
  );
}

export default App;