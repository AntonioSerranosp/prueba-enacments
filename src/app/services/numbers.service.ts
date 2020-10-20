import  db from  '../firebase/config';

const numero = {
    value: 100,

}

export const crearRegistro = (numero:any) =>{
    db.collection('numeros')
    .add( numero).then((documentReference : any) => {
        console.log(`Added document with name: ${documentReference.id}`);
    });
} 
