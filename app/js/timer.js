const moment = require('moment');
let segundos;

module.exports = {
    iniciar(elemento){
        let tempo = moment.duration(elemento.textContent);
        segundos = tempo.asSeconds();
        setInterval(() => {
            segundos++;
            elemento.textContent = this.segundosParaTempo(segundos);
        }, 1000)
    },
    segundosParaTempo(segundos){
        return moment().startOf('day').seconds(segundos).format("HH:mm:ss");
    },
    parar(){

    }
}