import react, { useState } from 'react'

function TaskForm() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const  createTask = () => {
        
    }
     
   
    const handleSubmit = (e) => {
    console.log("enviado")
        createTask()
        e.preventDefault()
    }
 

    return ( 
        <form onSubmit={handleSubmit}>
            <input 
            placeholder='Escribe tu tarea aqui'
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            ></input>
            <textarea
             placeholder='description'
             value={description}
             type="text"
             onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button>Guardar</button>
        </form>
     );
}

export default TaskForm;


