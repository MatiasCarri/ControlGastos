document.addEventListener("DOMContentLoaded", function() {
function agregarGasto(event) {
    event.preventDefault();

        var fechaInput = document.getElementById("fecha");
        var motivoInput = document.getElementById("motivo");
        var gastoTotalInput = document.getElementById("gastoTotal");
        var gastoTotal = parseFloat(gastoTotalInput.value);

        var valido = true;
    
        var fechaSeleccionada = new Date(fechaInput.value);
        var fechaActual = new Date();

        const errorFecha = document.querySelector("#fecha + span.error");
        const errorMotivo = document.querySelector("#motivo + span.error");
        const errorGastoTotal = document.querySelector("#gastoTotal + span.error");

        if (fechaInput.value === "") {
            errorFecha.textContent = "El campo fecha no puede estar vacío.";
            errorFecha.classList.toggle("show");
            valido = false;
            setTimeout(() => {
                errorFecha.classList.remove("show");
            }, 3000);
        }
        
        if (fechaSeleccionada >= fechaActual) {
            errorFecha.textContent = "La fecha debe ser anterior a la fecha actual.";
            errorFecha.classList.toggle("show");
            valido = false;
            setTimeout(() => {
                errorFecha.classList.remove("show");
            }, 3000);
        }
    
        if (motivoInput.value.trim() === "") {
            errorMotivo.textContent = "El campo motivo no puede estar vacío.";
            errorMotivo.classList.toggle("show");
            valido = false;
            setTimeout(() => {
                errorMotivo.classList.remove("show");
            }, 3000);
        }
    
        if (gastoTotalInput.value.trim() === "") {
            console.log("gasto total vacío");
            errorGastoTotal.textContent = "El campo gasto total no puede estar vacío.";
            errorGastoTotal.classList.toggle("show");
            console.log(errorGastoTotal);
            valido = false;
            setTimeout(() => {
                errorGastoTotal.classList.remove("show");
            }, 3000);
        } else if (isNaN(gastoTotal)) {
            errorGastoTotal.textContent = "El campo gasto total debe ser un número válido.";
            errorGastoTotal.classList.toggle("show");
            valido = false;
            setTimeout(() => {
                errorGastoTotal.classList.remove("show");
            }, 3000);
        }

    if(valido){
        const urlRedireccion = `index.html?fecha=${document.getElementById("fecha").value}&motivo=${document.getElementById("motivo").value}&medio=${document.getElementById("medio").value}&gastoTotal=${document.getElementById("gastoTotal").value}`;
        window.location.href = urlRedireccion;
    }
}


var gastoForm = document.getElementById("gastoForm");
gastoForm.addEventListener("submit", agregarGasto);


});    