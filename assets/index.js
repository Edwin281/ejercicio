// Esperar que el DOM esté listo con js
document.addEventListener("DOMContentLoaded", function(event) {
    let numeros=[];
	let tabla=document.getElementsByTagName("td");
	for (let i=0; i<tabla.length; i++){
		numeros.push(parseInt(tabla[i].innerHTML));
	}
	// ordenar numeros
    numeros.sort(function(a, b){return a-b});
    // crear nueva tabla de 8  x 10
    let table2=document.createElement("table");
    let tbody=document.createElement("tbody");
    for (let i=0; i<8; i++){
        let tr=document.createElement("tr");
        for (let j=0; j<10; j++){
            let td=document.createElement("td");
           td.innerHTML=numeros[i*10+j];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    /* pintar tabla */
    table2.appendChild(tbody);
    document.body.appendChild(table2);

});



