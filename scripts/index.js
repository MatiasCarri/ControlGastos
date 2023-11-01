document.addEventListener("DOMContentLoaded", () => {
    function calcularTotal() {
        var subtotales = document.querySelectorAll("table tbody tr td:nth-child(4)");
        var total = 0;
        subtotales.forEach(function (subtotalCell) {
            var subtotal = parseFloat(subtotalCell.textContent) || 0; // Convierte el contenido a número
            total += subtotal;
        });
        document.getElementById("sumaTotal").textContent = total.toFixed(2); // toFixed: en un float, número de digitos después de la coma
    }

window.addEventListener("load", calcularTotal);

});

const params = new URLSearchParams(window.location.search);

const fechaSinFormato = params.get('fecha');
const fechaDividida = fechaSinFormato.split('-');
const fecha = fechaDividida[2] + '/' + fechaDividida[1] + '/' + fechaDividida[0];
const medio = params.get('medio');
const motivo = params.get('motivo');
const gastoTotal = params.get('gastoTotal');
var gastoFloat = parseFloat(gastoTotal);

function agregarFilaDinamica() {
  if (fecha && medio && motivo && gastoTotal) {
    var table = document.querySelector("#tablaGastos");
    var newRow = table.insertRow(-1);

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = fecha;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = motivo;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = medio;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = gastoFloat;
  }
}

agregarFilaDinamica();

