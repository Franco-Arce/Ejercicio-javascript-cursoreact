// Función para agregar una nueva tarea
function agregarTarea() {
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const listaTareas = document.getElementById("listaTareas");
    const nuevaTareaTexto = nuevaTareaInput.value.trim();
    if (nuevaTareaTexto !== "") {
        const div = document.createElement("div")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.classList = "check"
    checkbox.onclick = function(){
        marcarCompletada(nuevaTarea)
    }
    
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto;
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "delete";
    botonEliminar.onclick = function() {
    listaTareas.removeChild(nuevaTarea);
    };
    div.appendChild(checkbox);
    div.appendChild(botonEliminar);
    nuevaTarea.appendChild(div);
    listaTareas.appendChild(nuevaTarea);
    nuevaTareaInput.value = "";
    }
    
    }
    // Función para marcar una tarea como completada
    function marcarCompletada(tarea) {
    tarea.classList.toggle("completed");
    }
    // Agregar evento de clic a las tareas para marcarlas como
//completadas
document.getElementById("listaTareas").addEventListener("click",
function(event) {
if (event.target.tagName === "LI") {
marcarCompletada(event.target);
}
});
// Agregar evento de clic al botón "Agregar"
document.getElementById("agregar").addEventListener("click",
agregarTarea);

function mostrarCompletadas() {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
    if (tarea.classList.contains("completed")) {
    tarea.style.display = "flex";
    } else {
    tarea.style.display = "none";
    }
    });
    }
    // Función para mostrar tareas pendientes
    function mostrarPendientes() {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
    if (!tarea.classList.contains("completed")) {
    tarea.style.display = "flex";
    } else {
    tarea.style.display = "none";
    }
    });
    }
    // Agregar evento de clic al botón "Mostrar Completadas"
    document.getElementById("mostrarCompletadas").addEventListener("click", mostrarCompletadas);
    // Agregar evento de clic al botón "Mostrar Pendientes"
    document.getElementById("mostrarPendientes").addEventListener("click", mostrarPendientes);