import { useContext } from 'react'
import './Cart.css'
import Modal from '../UI/Modal'
import CartSotre from '../../Store/CartSotre'
import CartItem from './CartItem'

export default function Cart(props) {
    const cartControl= useContext(CartSotre)
    const totalAmount = `$${cartControl.totalAmount.toFixed(2)}`
    const hasItem = cartControl.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartControl.removeItem(id);
      };
    
      const cartItemAddHandler = (item) => {
        cartControl.addItem({ ...item, amount: 1 });
      };
    
   
    const cartItems = (
        <ul className='cart-items'>
          {cartControl.items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          ))}
        </ul>
      );

  return (
    <Modal hideHandler={props.hideHandler}>
        {cartItems}
        <div className='total'>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className='actions'>
            <button className='button--alt' onClick={props.hideHandler}>Close</button>
            {hasItem && <button className='button'>Order</button>}
            
        </div>
    </Modal>
  )
}
