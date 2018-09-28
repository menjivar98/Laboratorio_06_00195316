function ejer5 (tipo,array){ // Tipo tiene que ser pasado en entre comillas
    type = [];

    array.forEach(element => {
        if(typeof element == tipo){
            type.push(element);
        }    
    
    });

    console.log(type);
    
}