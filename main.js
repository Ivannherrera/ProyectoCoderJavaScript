function calcularCuota() {
    var monto = parseFloat(document.getElementById('monto').value);
    var tasa = parseFloat(document.getElementById('tasa').value) / 100 / 12;
    var plazo = parseInt(document.getElementById('plazo').value);
    var cuota = monto * (tasa * Math.pow(1 + tasa, plazo)) / (Math.pow(1 + tasa, plazo) - 1);

    document.getElementById('resultado').innerHTML = "Cuota mensual a pagar: " + cuota.toFixed(2) + " ";
}