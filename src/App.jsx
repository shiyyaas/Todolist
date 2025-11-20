import { useState } from 'react'
import Core from './components/Core'

function App() {
  const [tasks, setTasks] = useState([]);
  

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-blue-400">
      <Core tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
