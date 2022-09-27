import React, {useState} from 'react';

const Contador = () => {

const [state, setState] = useState(0);

return (
        <>
            <button className='btn btn-dark' onClick={() => setState(state + 1)}> Haceme click </button>
              <p> cantidad de veces que hiciste click : {state} </p>
           
        </>
    );
}

export default Contador;
