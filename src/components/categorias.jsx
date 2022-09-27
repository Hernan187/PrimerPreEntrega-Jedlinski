import React from 'react';

const Categorias = () => {
    return (
        <>
            <li className="nav-item">
          <a className="nav-link active" href="#">Decks
            {/* <span className="visually-hidden">(current)</span> */}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Trucks</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Wheels</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Media</a>
        </li>
        </>
    );
}

export default Categorias;
