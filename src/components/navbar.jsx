import React from 'react';
import CartWidget from './CartWidget';
import Categorias from './categorias';
import Dropdown from './dropdown';
import Form from './form';

const Navbar = () => {

const listaT = [ "S", "M", "L", "XL" ]

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Info</a>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button> */}
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
      <Categorias/> 
      <Dropdown lista={listaT} />
      </ul>
      {/* aca va el carrito */}
      <CartWidget/>
      

      <Form busqueda="Que Buscas ?" />

      <form className="d-flex">
        {/* <input className="form-control me-sm-2" type="text" placeholder="Search" /> */}
        {/* <button className="btn btn-secondary my-2 my-sm-0" type="submit">SkateShop.</button> */}
        <a className="nav-link" href="#" id='elshop'>SkateShop.</a>
      </form>
    </div>
  </div>
</nav>
        </>
    );
}

export default Navbar;
