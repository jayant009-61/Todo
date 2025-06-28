import { useState } from "react"

function App(){
const[todo,setTodo]=useState([])
const[serialno,setSerialno]=useState("")
const[task,setTask]=useState("")
const[dt,setdt]=useState("")
const[startime,setStarttime]=useState("")
const[finishtime,setFinishtime]=useState("")

function Add(){
  const as = [{serialno: serialno, task:task, dt:dt, starttime:startime, finishtime:finishtime }, ...todo]
  setTodo(as)
}

return(
<>
<div className="a1">Todo List</div>
<br /> <br />
<div className="a2">
  <div className="a3">
    <h1>Tasks</h1>
    <div className="a4">
      <div className="a5">
        <input type="text" placeholder="Eneter_S.no." onChange={(e)=>setSerialno(e.target.value)} />
        <input type="text" placeholder="Eneter_Task" onChange={(e)=>setTask(e.target.value)} />
        <input type="Date" placeholder="Eneter_Date" onChange={(e)=>setdt(e.target.value)} />
        <input type="text" placeholder="Eneter_Start_time" onChange={(e)=>setStarttime(e.target.value)} />
        <input type="text" placeholder="Eneter_Finish_time" onChange={(e)=>setFinishtime(e.target.value)} />
        <button onClick={Add}>Add Task</button>
      </div>
      <br /><br />
      <div className="a6">
        <table>
          {todo.map((item) => <tr><td><th>serialno</th>{item.serialno}</td><td><th>task</th>{item.task}</td><td><th>date</th>{item.dt}</td><td><th>starttime</th>{item.starttime}</td><td><th>finishtime</th>{item.finishtime}</td></tr> )}
        </table>
      </div>
    </div>
  </div>
</div>
<div className="b1">
  <div className="b2">
    <h1>Made By Jayant Suri</h1>
  </div>
</div>
</>
)


}
export default App