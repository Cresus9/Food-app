import React, {Fragment, useState} from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './Store/CartProvider';

function App() {
  const [show, setShow]=useState(false)


  const showHandler=()=>{
    setShow(true)
  }
  const hideHandler=()=>{
    setShow(false)
  }



  return (
    <CartProvider>
      {show? <Cart hideHandler={hideHandler}/>:""}
       <Header showHandler={showHandler}/>
       <main>
        <Meals />
       </main>
    </CartProvider>
     
    
  );
}

export default App;
