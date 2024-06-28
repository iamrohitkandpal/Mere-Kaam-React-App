"use client";
import React from 'react'
import { useState } from 'react'

const page = () => {
  const [name, setName] = useState("")
  const [details, setDetails] = useState("")
  const [mainTask, setMainTask] = useState([""])
  const submitHandler = (e)=>{
    e.preventDefault();
    setMainTask([...mainTask, {name, details}]);
    setName("");
    setDetails("");
    console.log(mainTask);
  }
  const deleteHandler = (i)=>{
    let copyTask = [...mainTask];
    copyTask.splice(i,1);
    setMainTask(copyTask);
  }
  
  let renderTask = <h2 className='text-lg font-semibold'>Koi Kaam Nahi Hai</h2>
  if(mainTask.length>1){
    renderTask = mainTask.map((task, i)=>{
      if(i != 0){
        return (
            <li key={i} className='flex items-top justify-between'>
               <div className='flex w-[90%] items-center justify-between mb-5 rounded-md bg-slate-300 px-5 py-2'>
                <h5 className='text-xl font-semibold w-[20%] overflow-ellipsis'>{task.name}</h5>
                <h6 className='text-lg w-[70%] text-right overflow-ellipsis'>{task.details}</h6>
              </div>
                <button
                onClick={()=>{
                  deleteHandler(i);
                }}
                className='px-3 py-2 rounded-lg bg-green-600 mb-5 text-white text-lg'>Kaam Khatam</button>
            </li>
          );
      }
    });
  }
  return (
    <>
      <h1 className='mt-2 rounded-lg mx-5 bg-[#421fff] text-center text-white font-bold text-3xl py-5'>Mere Kaam React App</h1>
      <form className='flex items-center gap-10' onSubmit={submitHandler}>
        <input type="text" 
        value={name} onChange={(e)=>{
          setName(e.target.value);
        }} placeholder='Enter Task Name Here' 
        className='text-lg border-[#421fff] text-[#421fff] bg-[#e6e7ff] outline-[#817aff] placeholder-[#abaaff] border-2 my-8 ml-8 px-4 py-2 rounded-md'/>
        <input type="text" 
        value={details} onChange={(e)=>{
          setDetails(e.target.value);
        }}
        placeholder='Enter Task Details Here' 
        className='text-lg border-[#421fff] text-[#421fff] bg-[#e6e7ff] outline-[#817aff] placeholder-[#abaaff] border-2 my-8 px-4 py-2 rounded-md'/>
        <button className='bg-[#421fff] text-white px-7 py-3 border-2 rounded-full border-[#5845ff]'>Create Task</button>
      </form>
      <hr />
      <h2 className='text-2xl mx-8 mt-5 text-[#3413f0] font-bold'>Mere Saare Kaam</h2>
      <div className='mx-8 my-5 rounded-lg bg-slate-200'>
        <ul className='px-5 py-10'>{renderTask}</ul>
      </div>
    </>
  )
}

export default page