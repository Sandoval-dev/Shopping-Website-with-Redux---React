import React from 'react'
import { removeFromCart } from '../../redux/cartSlice'
import {useDispatch} from 'react-redux'

const CartComp = ({cart}) => {
  const dispatch=useDispatch()
  return (
    <div className='my-10 flex items-center justify-between'>
      <img className='w-[150px] h-[150px] my-5 object-cover' src={cart?.image} alt=''/>
      <div className='w-[476px]'>
        <div className='text-xl'>{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className='font-bold text-2xl'>{cart?.price} ₺ - ({cart?.quantity})</div>
      <span onClick={() =>dispatch(removeFromCart(cart?.id))} className="my-3 cursor-pointer inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
       <span className='text-lg font-bold'>Ürünü Sil</span> 
      </span>
    </div>
  )
}

export default CartComp