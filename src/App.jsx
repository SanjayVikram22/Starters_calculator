import React, { useState } from 'react'

export default function App() {
  const varaibles=["1","2","3","4","5","6","7","8","9","0","+","-","*","/","=","C"]
  const [number,SetNumber]=useState("")
  const calci = (value) => {
    try {
      if (number === 0 && value === "C") {
      } else if (number === 0) {
        SetNumber(value.toString());
      } else if (value === "C") {
        SetNumber(0);
      } else if (value === "=") {
        SetNumber(eval(number));
      } else {
        SetNumber(number + value.toString());
      }
    } catch (error) {
      SetNumber("Error");
    }
  };

  
  return (
    <>
    <h1 className='font-bold text-red-500 text-center text-2xl'>Calculator</h1>
    <div className='grid border bg-blue-100 h-40 rounded-md m-7'>
      <h1 className='text-end text-3xl'>{number}</h1>
    </div>
    <div className='grid grid-cols-4 justify-between lg:ml-[125px] sm:mx-auto '>
      {varaibles.map((i,index)=>(
        <button key={index} onClick={()=>calci(i)}  onKeyUp={(e) => handler(e)} className='h-20 w-20 size-lg bg-slate-400 p-4 m-2 rounded hover:bg-red-300' >{i}</button>
      ))}
    </div>
    </>
  )
}
