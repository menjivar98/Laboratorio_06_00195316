function ejer6(n){
    cadena = n.split('');
    aux = [];

    cadena.forEach(element => {
        if(element == 'm'){
            element = 0;
        }

        if(element == 'u'){
            element = 1;
        }
        if(element == 'r'){
            element = 2;
        }
        if(element == 'c'){
            element = 3;
        }
        if(element == 'i'){
            element = 4;
        }
        if(element == 'e'){
            element = 5;
        }
        if(element == 'l'){
            element = 6;
        }
        if(element == 'a'){
            element = 7;
        }
        if(element == 'g'){
            element = 8;
        }

        if(element == 'o'){
            element = 9;
        }


        aux.push(element);
    });
    
    return aux.join('').toString();

}