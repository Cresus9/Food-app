import React from 'react'

 const CartSotre = React.createContext({
            items: [],
            totalAmount: 0,
            addItem: (item)=> {},
            removeItem: (id)=> {}

        })
export default CartSotre;
