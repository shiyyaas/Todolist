import Task from './Task'

function AddTask(){
  return(
    <Task/>
  )
}

export default function Core({ taskdata , onTaskdataChange }) {
    const h1class = "text-3xl";  
    return (
        <div className="text-center">
            <h1 className={`${h1class} m-5`}>To-Do List</h1>
            <input 
            name="task"
            value={taskdata}
            onChange={(e) => onTaskdataChange(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter'){
                    alert("shiyas")
                    AddTask();
                }
            }}
            className='border rounded-xl px-5 py-2'
            type="text" placeholder='Enter the task :' />
        </div>
    )
  }