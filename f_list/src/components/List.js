import React, {useEffect, useState} from 'react'
import { Button } from 'react-bootstrap'
import TaskService from '../service/TaskService'
//import { useNavigate } from 'react-router-dom';
import CNavbar from './CNavbar';


const List =() => {
const [tasks, settasks]=useState([])
//const navigate = useNavigate();
const [finished,setFinished]=useState()
const [finishedAt,setFinishedAt]=useState()


const finishTask = (e,id)=>{
  e.preventDefault() ;
  setFinished(true);
  setFinishedAt(Date.now())
  var task ={finished:finished, finished_at:finishedAt}
  TaskService.update(id,task).then((Response) => {
  console.log(Response.data)
  TaskService.getAll().then((Response) => {
    settasks(Response.data)})
  })
}



const removetask= (id) => {
    settasks(current =>
      current.filter(task=> {
        return task.id !== id;
      }),
    );
};

useEffect(()=> {
    TaskService.getAll().then((Response) => {
    settasks(Response.data)
    console.log(Response.data);
}).catch(error => {console.log(error)})
},[] )


const deleteTask = (e,id)=>{
    console.log(id)
    e.preventDefault() ;
    TaskService.delete(id).then((Response) => {
    removetask(id)
   console.log(Response.data)
    }).catch(error=> {
        console.log(error)
    })
    
    
}

return(
<div>
  <CNavbar></CNavbar>
<div className="container" >
<h2 className="text-center"> List Task</h2>
<br />
<br />
<table className=" tabl table-bordred table">
<thead>
<th>Title</th>
<th>Description</th>
<th>Finished</th>
<th>FinishedAt</th>
<th>CreatedAt</th>
<th>UpdatedAt</th>

</thead>
<tbody>
{ 
tasks.map(
task=>
<tr>
<th>{task.finished?<s>{task.title}</s>:task.title}</th>
<td>{task.finished?<s>{task.description}</s>:task.description}</td>
<td  onChange={setFinished}>{task.finished? <s>{ task.finished.toString()} </s> : task.finished.toString() }</td>
<th  onChange={setFinishedAt} >{task.finished_at }</th>
<td>{task.finished? <s>{task.createdAt} </s> : task.createdAt } </td>
<td>{task.finished? <s>{ task.updatedAt} </s> : task.updatedAt } </td>
<td><Button variant="primary" onClick={(e)=>finishTask(e,task.id)}>Finished</Button></td>
<td><Button variant="success" onClick={(e)=>deleteTask(e,task.id)}>Delete</Button></td>
</tr> )}
</tbody>
</table>
</div>

</div>
)}
export default List ;