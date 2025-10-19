// Inserción 
function insertar(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
}

// Verificar si un dato existe
function existe(key) {
    return sessionStorage.getItem(key) !== null;
}

// Eliminar cierta información
function eliminar(key) {
    sessionStorage.removeItem(key);
}

// Eliminar todo el contenido de sessionStorage
function borrarTodo() {
    sessionStorage.clear();
}
