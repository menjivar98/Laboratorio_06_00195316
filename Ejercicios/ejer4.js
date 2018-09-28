function ejer4 (array){
    eshta = array.length;
    if(cantidad % 2){
        for(i = 0; i < array.length/2; i++){
            console.log(array[i] + array[eshta -(1+i)])
        }
    }
    else{
        for(i = 0; i < Math.floor(array.length/2); i++){
            console.log(array[i] + array[eshta -(1+i)])
        }

        console.log(array[Math.floor(array.length/2)]*2);
    }
}