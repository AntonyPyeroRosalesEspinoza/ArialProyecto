import { useState } from "react"
import { useTasks } from "../contexts/TaskContest"

function TaskForm() {

    //Estado de taskname
    const [taskname, setTaskName] = useState('')
    const { createTask, adding } = useTasks();

    //Evento de escucha, funcion handle
    const handleSubmit = async e => {
        e.preventDefault();                                      //cancelar comportamiento por defecto
        createTask(taskname);
        //console.log(adding);
        setTaskName("");                                        //Limpia datos
    };

    return (
        //Evento de React
        <div>
            <form onSubmit={handleSubmit} className="card card-body">                      {/* ejecutando el handle */}                    
                <input 
                    type="text" 
                    name="taskName" 
                    placeholder="Escribe una tarea"
                    onChange={e => setTaskName(e.target.value)}
                    value={taskname}
                    className="form-control mb-2"
                ></input>
            <div className="ms-auto">
                <button className="btn btn-primary btn-sm">                                        {/* <button disabled = {adding}> 1:15:20 */}
                    {adding ? "Agregando..." : "Agregar"}
                </button>
            </div>
            </form>
                
        </div>
    )

}

export default TaskForm
