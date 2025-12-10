import { useState } from "react";

export const NewItemForm = ({ onAdd }) => {
    const [texto, setTexto] = useState("");

    const handleSubmit = () => {
        if (texto.trim() === "") return;
        onAdd(texto);
        setTexto("");
    };

    return (
        <div>
            <input
                type="text"
                value={texto}
                placeholder="Nueva tarea..."
                onChange={(e) => setTexto(e.target.value)}
            />
            <button onClick={handleSubmit}>Añadir</button>
        </div>
    );
};
