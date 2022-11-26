import { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import CartSotre from '../../Store/CartSotre'
import './HeaderCart.css'

export default function HeaderCart({onclick}) {
    const CartUpdate = useContext(CartSotre)

    const numberOfCartItems= CartUpdate.items.reduce((curNumber,item)=>{
        return curNumber + item.amount;
    }, 0)
  return (
   <button onClick={onclick} className='button'>
    <span className='icon'>
        <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className='badge'>{numberOfCartItems}</span>
   </button>
  )
}
