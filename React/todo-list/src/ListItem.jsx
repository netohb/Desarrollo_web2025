export function ListItem({ id, completado, texto, cambiaValor }) {
    return (
        <li>
            <input
                type="checkbox"
                checked={completado}
                onChange={cambiaValor}
            />
            <span>{texto}</span>
        </li>
    );
}
