function ejer3 (array){
    aux1 = 0;
    aux2 = 0;
    aux3 = 0;
    aux4 = 0;
    aux5 = 0;
    
    array.forEach(element => {
        if(typeof element == 'boolean'){
            aux1 += 1;
        }
        
        if(typeof element == 'number'){
            aux2 += 1;
        }

        if(typeof element == 'function'){
            aux3 += 1;
        }

        if(typeof element == 'string'){
            aux4 +=1;
        }

        if(typeof element == 'undefined'){
            aux5 +=1;
        }
    });

    if( aux5 > 0){
        console.log(" Elementos tipo boolean: " + aux1 + " Elermentos tipo number:" + aux2 +  " Elementos tipo function: " + aux3 + " Elementos tipo string: " + aux4 + " Elementos tipo undefined:" + aux5);
    }
    else{
        console.log(" Elementos tipo boolean: " + aux1 + " Elermentos tipo number:" + aux2 + "Elementos tipo function: " + aux3 + "Elementos tipo string: " + aux4);
    }
}