function calcular_importe() {
    let name = document.getElementById('nombre-usuario').value
    let cantidad = document.getElementById('importe').value
    cantidad = parseFloat(cantidad)
    let checked = document.getElementById('iva').checked
    console.log (checked)
    //let iva = 0.21

    mensaje_resultado = ""

    if (checked = false){
        let iva = 0.21

        let importe_total = cantidad * iva + cantidad
        importe_total = parseFloat(importe_total).toFixed(2)

        mensaje_resultado = `${name}, su importe es de ${cantidad}€. Sumándole el IVA del ${iva} es de ${importe_total}€`
    }    
    else {
        iva = 0.10

        let importe_total = cantidad * iva + cantidad
        importe_total = parseFloat(importe_total).toFixed(2)

        mensaje_resultado = `${name}, su importe es de ${cantidad}€. Su importe total es de ${importe_total}€`
    }
        
    document.getElementById('resultado-importe').textContent = mensaje_resultado
}