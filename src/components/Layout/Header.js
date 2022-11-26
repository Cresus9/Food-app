import { Fragment} from 'react'
import './Header.css'
import HeaderCart from './HeaderCart'
// import { image1 } from '../../public/Asset/Image/header.jpg'

export default function Header({showHandler}) {
  return (
    <Fragment>
        <header className='header'>
            <h1 className='name'> Meals</h1>
            <HeaderCart onclick={showHandler} className='cart'/>
        </header>
        <div className='main-image'>
            <img src='https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='/'/>
        </div>
    </Fragment>
   
  )
}
