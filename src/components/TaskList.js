import React from 'react'
import {tasks} from '../mockData/mockdata'


const TaskList = () => {
     console.log(tasks)
    return (  


        <div>
            {tasks.map((task)=>{
                return(
                    <div>

                    <h1>{task.title}</h1>
                    <p>{task.description}</p>

                </div>
                )

            })}
        </div>


    );
}
 



export default TaskList;