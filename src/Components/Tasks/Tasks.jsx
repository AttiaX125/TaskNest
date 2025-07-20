import React, { useState } from 'react'

export default function Tasks() {
    const [task, setTask] = useState({
        title: '',
        description: '',
        status: ''
    });
    function createTasks (event){
        let newTasks = {...task};
        newTasks[event.target.name] = event.target.value;
        setTask(newTasks);
        console.log(newTasks);
    }
    function sendTasks (){
        // send data to local storage  
    }
    function taskSubmition(e){
        e.preventDefault();
        sendTasks();
    }
  return (
    <>
    <div className="prim min-vh-100">
        <div className='mx-5'> 
    <h1 className='fw-bold mt-3 p-2 mb-4'>Add Tasks</h1> 
    <div className="tasks bg-white rounded-3 p-3 ">
     <form onSubmit={taskSubmition}>
        <label htmlFor="title">Title</label>
        <input onChange={createTasks} className='form-control p-2 mb-2' type="text" id='title' name='title'/>
        <label htmlFor="description">Discription</label>
        <textarea onChange={createTasks} className='form-control p-2 mb-2' name="description" id="description"></textarea>
        <label htmlFor="status">Status</label>
        <select onChange={createTasks} className='form-control p-2 mb-2' name="status" id="status">
            <option value="pending">pending</option>
            <option value="completed">completed</option>   
            <option value="Inprogress">In progress</option>
        </select>
        <button className='btn btn-info p-2 mb-2 mt-4'>Create</button>
    </form>
    </div>
    </div>
    </div>
    </>
  )
}
