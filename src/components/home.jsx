import React, {useState, useEffect} from 'react';

const Home = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const consultar = async () => {
            const response = await fetch('./json/decks.json')
            const productos = await response.json()
            const cardProducto = productos.map(producto =>
                <div className="card cardProducto" key={producto.id} >
                  <img src={"./img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                   <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text"> Brand: {producto.marca}</p>
                    <p className="card-text"> Price: {producto.precio}</p>
                    <p className="card-text"> Stock: {producto.stock}</p>
                     {/* <a href="#" className="btn btn-primary"> Add to Cart </a> */}
                    <button className='btn btn-dark'> Add to Cart </button>
                   </div>
                </div>   )

              return cardProducto

            }

         consultar().then(productos => setProductos(productos))
    }, []);
    
    return (
        <>
        <div className='row'>
          {productos}
        </div>
            
        </>
    );
}

export default Home;
