function burbuja (vector,callback){

    let aux;

    for (let i = 0; i < vector.length; i++) {  
        for (let j = 0; j < vector.length; j++) {
            if (vector[j] > vector[j+1]){
                aux=vector[j];
                vector[j]=vector[j+1];
                vector[j+1]=aux;
            }       
        }        
    }
    return callback(null,vector);
}
module.exports={
    burbuja,
    
}