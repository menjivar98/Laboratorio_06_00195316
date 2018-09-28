function ejer1 (n,Array){
    aux =0;
    Array.forEach(element => {
        if(n == element){
            aux += 1;
        }
    });

    return aux;
}