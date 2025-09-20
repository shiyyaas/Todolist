export default function Core() {
    const h1class = "text-3xl";
    
    return (
      <div className='flex flex-col min-h-screen items-center justify-center bg-blue-400'>
        <h1 className={`${h1class} m-5`}>To-Do List</h1>
        <input 
        className='border rounded-xl px-5 py-2'
        type="text" placeholder='Enter the task :' />
      </div>
    )
  }