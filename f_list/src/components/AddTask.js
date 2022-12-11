import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TaskService from '../service/TaskService';
import { useNavigate } from 'react-router-dom';
import CNavbar from './CNavbar';

function AddTask() {
    const [title,setTitle]=useState('')
    const finished_at=null
    const [description,setDescription]=useState('')
    const navigate = useNavigate();
    const finished = false

    const saveTask = (e)=>{
        e.preventDefault() ;
        var task ={title:title ,description :description, finished:finished ,finished_at:finished_at}
       TaskService.create(task).then((Response) => {
        console.log(Response.data)
        navigate('/list'); }).catch(error=> {
            console.log(error.name)
        })
    }
  return (
   <div>
   <CNavbar></CNavbar>
    <div
    
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
    
    <Form  style={{width: "500px" ,height:"500px"}}>
       <h1 className="text-center"> Add New Task </h1>
      <Form.Group className="mb-3">
        <Form.Label>Add Title</Form.Label>
        <Form.Control 
         value={title}
         onChange={(e)=>setTitle(e.target.value)}
         name="title"
         type="text" placeholder="Enter task's title" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control 
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        name="description"
        type="text" placeholder="Enter task's description " />
      </Form.Group>

      <Button variant="primary" onClick={(e)=>saveTask(e)} type="submit">
        Add
      </Button>
    </Form>
    </div>
    </div>
  );
}
export default AddTask;