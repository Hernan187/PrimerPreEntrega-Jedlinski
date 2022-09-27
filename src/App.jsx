import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
// import Main from './components/main';
// import Contador from './components/contador';
// import Cards from './components/cards';
// import Dolar from './components/dolar';
// import Home from './components/home';

const App = () => {
    return (
        <>
        <Navbar/>
        {/* <Contador/> */}
        {/* <Cards/> */}
        {/* <Dolar/> */}
        {/* <Home/> */}
        {/* <Main/> */}
        <ItemListContainer greeting="Productos" />
        </>
    );
}

export default App;
