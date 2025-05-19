'use client';
// import React from "react";
import { useState } from "react";
// import Layout from "./components/Layout";



function App() {

  const [title, settitle] = useState(" ");
  const [text, settext] = useState(" ");
  const [error, setError] = useState("");


  const [mainTask, setMainTask] = useState([])


  function SubmitHandlaer(event) {

    event.preventDefault();

    if (title.trim() === "" || text.trim() === "") {
      setError("Please fill Title && Task!");
    
      return;
    }

    setMainTask([...mainTask, { title, text }]);

    const newTask = ([...mainTask, { title, text }]);

    console.log(newTask);

    setError('')

    settext(" ");
    settitle(" ");

  }

  let renderTask = <h2>No Task Available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return <li key={i}>
        <div>
          <h3>{t.title}</h3>
          <h3>{t.text}</h3>
        </div>

        <button className=" bg-amber-300"
          onClick={() => {

            deleteHandler(i)

          }}>Delete</button>
      </li>
    })
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setMainTask(copytask)
  }


  return (


    <div className=" wrapper">

      <div className=" container">

        <h1 className=" text-2xl flex justify-center bg-amber-100 w-screen  ">To-Do List app</h1>

        <div className=" flex justify-center items-center">

          <form onSubmit={SubmitHandlaer}
            className=" flex justify-center items-center relative top-7 translate-x-12 ">

            <label  className="  -translate-y-8 translate-x-16" for="">TITLE</label>
            <input

              className=" border-2 rounded-2xl flex justify-items-center p-2 "
              placeholder='add new title'
              value={title}
              onChange={(event) => {

                settitle(event.target.value)

              }}
            />


            <label  className=" -translate-y-12 translate-x-24" for="">TEXT AERA</label>
            <input

              className=" border-2 rounded-2xl flex justify-items-center p-6 mt-4"
              placeholder=" Add new Task"
              value={text}
              onChange={(event) => {
                settext(event.target.value)
              }}
            />

            <div className=" translate-y-20 -translate-x-50">
               <button className=" p-5 ease-in-out  bg-amber-200 rounded-2xl w-[100px]">Submit</button>
            </div>

           
            {error && <div className="text-red-500 translate-y-50 -translate-x-80">{error}</div>}

          </form>

        </div>

        <div className=" p-8 bg-gray-400 w-screen mt-36">

          <ul>
            <li>
              {renderTask}
            </li>
          </ul>

        </div>

      </div>


    </div>
  )
}

export default App
