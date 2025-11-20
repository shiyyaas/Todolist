import Task from "./Task";

export default function Core({ tasks, setTasks }) {

  const addTask = (text) => {
    if (!text.trim()) return;
    setTasks([...tasks, text]); // add new task
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="text-center">

      <h1 className="text-3xl m-5">To-Do List</h1>

      <input
        className="border rounded-xl px-5 py-2"
        placeholder="Enter the task:"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask(e.target.value);
            e.target.value = "";
          }
        }}
      />

      {/* List of tasks */}
      <div className="mt-6">
        {tasks.map((t, index) => (
          <Task key={index} text={t} onDelete={() => deleteTask(index)} />
        ))}
      </div>

    </div>
  );
}