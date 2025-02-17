import { useState } from "react"

function App() {

  const [todolist,setToDoList]=useState([
    {id:1,taskName : "react" , done:"pending"},
    {id:2,taskName : "Todo" , done:"pending"},
    {id:3,taskName : "resume" , done:"pending"}
  ])
  const [newTask,setNewTask]=useState("")

  const addTask= (e)=>{
    e.preventDefault()
    if(!newTask){
      alert("enter a task")
    }else{
      let newId = todolist.length +1
      let newEntry ={id:newId , taskName:newTask , done:"pending"}
      
      setToDoList([...todolist,newEntry])
      setNewTask("")
    }
  }

  const deleteTask=(id)=>{
    setToDoList(todolist.filter((item)=>{
      return item.id !== id
    }))
  }

const doneTask=(id)=>{
  setToDoList(todolist.map((item)=>{
    return item.id === id ? {...item,done:"completed"}:item 
  }))
}

  return (
    <div className="h-screen flex justify-center font-bold text-5xl text-green-500 items-center bg-gradient-to-b from-fuchsia-500 to-black flex flex-col ">


          <h1>TODO LIST</h1>
          <div >
          <form  className="bg-white flex px-8 py-3 rounded-lg my-5"> 
          <input type="text" value={newTask} onChange={(e)=>{setNewTask(e.target.value)}} placeholder="enter task" className="outline-none border-none"/>
          <button onClick={addTask} className="bg-fuchsia-800 text-white px-3 py-1 rounded-lg flex items-center text-xl">add task</button>

          </form>

          <div className="flex gap-10"> 
            {
              todolist.map((item)=>{
                return(
                  <div key={item.id} className="text-lg text-white w-[250px] h-[250px] bg-zinc-800 py-10 px-6"> 
                    <h1>{item.taskName}</h1>
                    <p>status:{item.done}</p>
                    <div className="flex flex-col mt-10 gap-2 ">
                      <button onClick={()=>{doneTask(item.id)}} className="bg-blue-700 py-2 rounded-md text-sm">Update status</button>
                      <button onClick={()=>{deleteTask(item.id)}} className="bg-blue-700 py-2 rounded-md text-sm foni-semibold">Remove</button>
                    </div>
                  </div>
                )
              })
            }
          </div>
          </div>
          
    </div>
  )
}

export default App
