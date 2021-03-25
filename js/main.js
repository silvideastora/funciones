var numKoders = prompt("¿Cuántos nombres de Koders vas a ingresar)");
var koders = []

function getKoderName (){
    let KoderName = prompt ("Ingresa nombre");
    let lastName = prompt ("Ingresa apellido");
    koders.push(`${KoderName} ${lastName}`);
    console.log(KoderName);
    console.log(lastName);
}
for(let i=0; i<parseInt(numKoders); i++){

    getKoderName()// aqui estas llamando a esta funcion para ejecutar
}
    console.log(koders);

/*
    -pedir al usuario la cantidad de koders a guardar
    -pedir nombre y apellido de cada koder
    -guardar cada koder en un array 
    -imprimir cada uno de los koders
*/
/*
    permitir guardar koders adicionales
    permitir borrar un koder aleatorio de la lista
*/
var addNew = prompt("¿Quieres agregar otro nombre?: si/ no");
    if ( addNew.t== "si"){
        getKoderName();
    } else {
        alert("¡Adios Usuario!");
    }
    console.log(koders);

