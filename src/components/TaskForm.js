import React from 'react'

function TaskForm({ taskName, description, handledescription, handleTaskName, handleSubmit }) {

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='Escribe tu tarea aqui'
        value={taskName}
        type="text"
        onChange={handleTaskName}
      ></input>
      <textarea
        placeholder='description'
        value={description}
        type="text"
        onChange={handledescription}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}
export default TaskForm;


