import { element, string } from "prop-types";
import React, { useState } from "react";
export const TodoList = () => {
    const [task, setTask] = useState('')
    const [list, setList] = useState([])
    const addTask = (Event) => {
        Event.preventDefault();
        if (task.trim() !== '') { // Verifica que el valor no esté vacío
            setList([...list, task.trim()]);
            setTask('');
        }
    }
    const deleteTask = (item) => {
        setList(list.filter((element) => element != item))
    }
    return (
        <div>
            <h1>este sera mi Todo List </h1>
            <div className="container">
                <form onSubmit={addTask}>
                    <input type="text" className="form-control" placeholder={list.length ? "Anadir tareas" : "No hay tareas"}
                        value={task}
                        onChange={(Event) => setTask(Event.target.value)}
                    />
                </form>
                <h2>Lista de Tarea</h2>
                <div>
                    <ul className="list-group">
                        {list.map((item, id) => <li key={id} className="list-group-item d-flex justify-content-between hidden-icon" >
                            {item}
                            <span onClick={() => deleteTask(item)}>
                                <i className="fas fa-trash text-danger"></i>
                            </span>
                        </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}