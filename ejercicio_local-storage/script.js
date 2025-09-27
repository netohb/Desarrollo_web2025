// Clave única para guardar/leer del localStorage
const STORAGE_KEY = "perfil";


function renderFromStorage() {
    const mensaje = document.getElementById("mensaje");
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
        mensaje.hidden = true;
        mensaje.textContent = "";
        return;
    }

    try {
        const data = JSON.parse(raw);


        const tieneNombre = typeof data?.nombre === "string" && data.nombre.trim() !== "";
        const tieneDia = typeof data?.diaFavorito === "string" && data.diaFavorito.trim() !== "";
        const edadNum = Number(data?.edad);

        if (tieneNombre && tieneDia && Number.isFinite(edadNum)) {
            mensaje.textContent = `Hola ${data.nombre}, tienes ${edadNum} años, tu día de la semana favorito es ${data.diaFavorito}`;
            mensaje.hidden = false;
            return;
        }
    } catch (e) {
        console.warn("No se pudo parsear el JSON desde localStorage:", e);
    }

    // Si no pasó la validación o falló el parseo, no mostrar nada
    mensaje.hidden = true;
    mensaje.textContent = "";
}

// Maneja el submit del formulario: guarda el JSON en localStorage
function handleSubmit(ev) {
    ev.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const edadStr = document.getElementById("edad").value.trim();
    const diaFavorito = document.getElementById("diaFavorito").value;

    // Validaciones básicas (alineadas con required del HTML)
    if (!nombre || !edadStr || !diaFavorito) {
        return; // podrías mostrar mensajes de error si lo deseas
    }

    const data = {
        nombre: nombre,
        edad: Number(edadStr),     // se guarda como número
        diaFavorito: diaFavorito   // ej. "sábado"
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    // Actualizar el mensaje inmediatamente sin recargar
    renderFromStorage();
}

// onload: leer y pintar datos, y enganchar el submit
window.addEventListener("load", () => {
    renderFromStorage();

    const form = document.getElementById("perfilForm");
    form.addEventListener("submit", handleSubmit);
});
