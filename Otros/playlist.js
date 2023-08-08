// const nombrePlayList = prompt("nombre playlist")
// const numeroCancionesAgregar = parseFloat(prompt("cuantas canciones agregaras"))

// let playlist = [];
// for(let i = 1; i <=numeroCancionesAgregar; i++){
//     playlist.push(prompt(`agregue una canción ${i}/${numeroCancionesAgregar}`));
//     alert(`canciones agregadas:
//     ${playlist.join("/n")}`)
// }

//     let mensaje = `${nombrePlayList}
//     canciones:
//     ${playlist}`
//     alert(mensaje)

const nombrePlayList = prompt("Nombre de la playlist:");
const numeroCancionesAgregar = parseInt(prompt("¿Cuántas canciones deseas agregar?"));

while (isNaN(numeroCancionesAgregar) || numeroCancionesAgregar <= 0) {
  alert("Ingresa un número válido para la cantidad de canciones.");
  numeroCancionesAgregar = parseInt(prompt("¿Cuántas canciones deseas agregar?"));
}

let playlist = [];
for (let i = 1; i <= numeroCancionesAgregar; i++) {
  const cancion = prompt(`Agrega una canción (${i}/${numeroCancionesAgregar}):`);
  playlist.push(cancion);
  alert(`Canciones agregadas:\n${playlist.join("\n")}`);
}

const nombrePlaylistFormateado = nombrePlayList.charAt(0).toUpperCase() + nombrePlayList.slice(1).toLowerCase();

const mensaje = `
Playlist: ${nombrePlaylistFormateado}
Canciones:
${playlist.join("\n")}
`;

alert(mensaje);
