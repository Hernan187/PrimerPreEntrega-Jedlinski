/* ejemplo de una promise */
/* 
 const productos = [ 
     {
         id:1, nombre:"Gillet", marca:"Primitive", precio: 500, stock: 5
     },
     {
         id:2, nombre:"Vianna", marca:"Primitive", precio: 400, stock: 4
     },
     {
         id:3, nombre:"Hamilton", marca:"Primitive", precio: 600, stock: 4
     },
     {
         id:4, nombre:"Silvas", marca:"Primitive", precio: 700, stock: 5
     }
 ]

 const consulta = (habilitado) => {
     return new Promise((resolve, reject) => {
         if (habilitado) {
             resolve(productos)
         } else {
            reject("No esta habilitado")
         }
     })
 }
 
consulta(true).then(data => console.log(data)); */
import React, {useState, useEffect} from 'react';

const Dolar = () => {

    const [dolar, setdolar] = useState([]);

    useEffect(() => {
        const consultarApi = () => {
            fetch('https://criptoya.com/api/dolar')
            .then(response => response.json())
            .then(({blue, oficial, solidario}) => {
                setdolar (Object.entries({blue, oficial, solidario}).map((moneda, indice) => <p key={indice}> Tipo: {moneda[0]} - ${moneda[1]} </p>));
                console.log(dolar);
            })
            // console.log(dolar);
        } 
        consultarApi()
        setInterval(() => {
            consultarApi();
            console.log("hai");
        }, 60000);
    }, []);




    return (
        <>
            {dolar}
        </>
    );
}

export default Dolar;
