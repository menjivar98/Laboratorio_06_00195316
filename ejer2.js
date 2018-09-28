function ejer2 (array){
    suma = 0;
    if(array.length > 0){
        array.forEach(element => {
            suma = suma + element;    
        });
    }

    console.log("La suma es: " + suma);
    console.log("El promedio es: " + suma /array.length);


}