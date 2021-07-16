setInterval(printHour)

function printHour() {
    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundo = data.getSeconds()

    let horas = document.getElementById("horas").innerHTML = hora

    if (document.getElementById("horas").innerHTML = hora < 10) {
        horas = String(horas)
        horas = document.getElementById("horas").innerHTML = "0" + hora
    } else {
        let horas = document.getElementById("horas").innerHTML = hora
    }

    let minutos = document.getElementById("minutos").innerHTML = minuto

    if (document.getElementById("minutos").innerHTML = minuto < 10) {
        minutos = String(minutos)
        minutos = document.getElementById("minutos").innerHTML = "0" + minuto
    } else {
        let minutos = document.getElementById("minutos").innerHTML = minuto
    }

    let segundos = document.getElementById("segundos").value

    if (document.getElementById("segundos").innerHTML = segundo < 10) {
        segundos = String(segundos)
        segundos = document.getElementById("segundos").innerHTML = "0" + segundo

    } else {
        let segundos = document.getElementById("segundos").innerHTML = segundo

    }
}