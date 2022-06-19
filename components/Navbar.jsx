import React from 'react'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai'
import {Cart} from './'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
  const { showCart , setShowCart, totalQuantities} = useStateContext();

  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href={`/`}>
          <img src='https://i.postimg.cc/kMN42vS1/photo-2022-06-19-21-39-16.jpg' className='logoimage' alt="logo" />
        </Link>
      </p>
      <button type='button' className='cart-icon' onClick={()=>setShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

      {showCart &&  <Cart />}
    </div>
  )
}

export default Navbar