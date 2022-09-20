import React from 'react';

const Categorias = () => {
    return (
        <>
            <li className="nav-item">
          <a className="nav-link active" href="#">Skates
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
          <a className="nav-link active" href="#">Else</a>
        </li>
        </>
    );
}

export default Categorias;
