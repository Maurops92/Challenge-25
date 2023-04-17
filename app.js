//En un juego de pelea recibimos un array (generarlo) con 10 golpes aleatorios que recibe un personaje,
//mostrar todos los valores y luego buscar cual es el golpe mas fuerte que se dio.

let golpes = [];

for(i=0; i<10; i++){
    let daño = Math.floor(Math.random()*1000);
    golpes.push(daño)
}

document.write(`El daño hecho por cada golpe es de:<br> . ${golpes.join(`<br> . `)}`);

document.write(`<br>El golpe de mayor daño fue ${Math.max(...golpes)}, es un golpe critico.`);

