function mostrarHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}


const timer = setInterval(function interval() {
    console.log(mostrarHora())
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 10000);

setTimeout(function () {
    console.log('Olá mundo')
}, 30000)