import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <div>
                  <h1 className="texto">{greeting}</h1>
            </div>
        </>
    );
}

export default ItemListContainer;