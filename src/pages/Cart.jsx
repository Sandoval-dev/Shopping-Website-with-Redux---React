import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'
import CartComp from '../components/Cart/CartComp'

const Cart = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts, totalAmount, itemsCount } = useSelector(state => state.carts)


  console.log(carts, totalAmount, itemsCount)
  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])
  return (
    <div>
      {
        carts?.length > 0 ? <div>
          {
            carts?.map((cart, i) => (
              <CartComp key={i} cart={cart} />
            ))
          }

          <div className='flex items-center justify-end text-2xl'>TOPLAM TUTAR:  <span className='font-bold text-3xl ml-3'>
            {totalAmount} ₺</span>
          </div>

        </div> : <div>
          Kartınız Boş...
        </div>

      }</div>
  )
}

export default Cart