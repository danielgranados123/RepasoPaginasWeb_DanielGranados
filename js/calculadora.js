function calcularDescuento() {
    let monto = parseFloat(document.getElementById('monto').value);
    let descuento = 0;
 
    if (monto >= 1000) {
        descuento = 0.15;
    } else if (monto >= 500 && monto < 1000) {
        descuento = 0.10;
    } else {
        descuento = 0.05;
    }
 
    let montoFinal = monto - (monto * descuento);
    document.getElementById('resultado').innerHTML = `Descuento aplicado: ${(descuento * 100)}%<br>Total a pagar: $${montoFinal.toFixed(2)}`;
}
 