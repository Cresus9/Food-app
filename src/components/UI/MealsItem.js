import React from 'react'
import { useContext } from 'react'
import CartSotre from '../../Store/CartSotre'
import './MealsItem.css'
import MealsItemForm from './MealsItemForm'

export default function MealsItem(props) {
    const cartControl = useContext(CartSotre)

    const price= `$${props.price.toFixed(2)}`

    const AddToCartHandler=(amount)=>{
        cartControl.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })

    }
  return (
    <li className='meal'>
        <div>
            <h3>{props.name}</h3>
            <div className='description'>{props.description}</div>
            <div className='price'>{price}</div>
        </div>
        <div>
            <MealsItemForm  onAddToCart={AddToCartHandler}/>
        </div>
    </li>
  )
}
