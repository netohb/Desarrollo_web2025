import { useState, useEffect } from "react";
import { ListItem } from "./ListItem";
import { NewItemForm } from "./NewItemForm";

export const TodoList = () => {
    const [tareas, setTareas] = useState([
        { id: 1, completado: true, texto: "Aprender HTML" },
        { id: 2, completado: false, texto: "Aprender CSS" },
    ]);

    const [ultimaHoraDeCambios, setUltimaHoraDeCambios] = useState("");

    useEffect(() => {
        setUltimaHoraDeCambios(new Date().toLocaleTimeString());
    }, [tareas]);

    const cambiaTareaPorId = (id) => {
        setTareas((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, completado: !item.completado }
                    : item
            )
        );
    };

    const addTask = (texto) => {
        const nuevaTarea = {
            id: tareas.length + 1,
            completado: false,
            texto,
        };
        setTareas([...tareas, nuevaTarea]);
    };

    return (
        <>
            <h1>Todo list</h1>

            <NewItemForm onAdd={addTask} />

            <ul>
                {tareas.map((tarea) => (
                    <ListItem
                        key={tarea.id}
                        id={tarea.id}
                        completado={tarea.completado}
                        texto={tarea.texto}
                        cambiaValor={() => cambiaTareaPorId(tarea.id)}
                    />
                ))}
            </ul>

            <div>Último cambio: {ultimaHoraDeCambios}</div>
        </>
    );
};
