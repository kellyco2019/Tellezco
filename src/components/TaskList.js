import React from 'react'

const TaskList = ({ tasks }) => {
    return (  
        <div>
            {tasks.map((task) => {
                return(
                <article key={task.taskName}>
                    <h1>{task.taskName}</h1>
                    <p>{task.description}</p>
                </article>
                )
            })}
        </div>
    );
}
export default TaskList;