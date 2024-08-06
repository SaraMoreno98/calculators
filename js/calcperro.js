function calcular_edad() {
    let nombre = document.getElementById('nombre-mascota').value
    console.log (typeof(nombre))

    let edad = document.getElementById('edad-mascota').value
    edad = parseFloat(edad).toFixed(2)
    console.log (typeof(edad))

    mensaje = ""

    if (edad > 0 && edad < 50) {
        let edadHumana = edad * 7
    
        mensaje = `${nombre} tiene ${edad} años, que equivalen a  ${edadHumana} años humanos.`
    }
    else{
        mensaje = `Los datos introducidos no son correctos`
    }
    
    document.getElementById('resultado').textContent = mensaje
}