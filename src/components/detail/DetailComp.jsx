import React, { useState } from 'react'
import { CiStar } from "react-icons/ci";
import {useDispatch} from 'react-redux'
import { addToCart } from '../../redux/cartSlice';


const DetailComp = ({ productDetail }) => {
    const dispatch=useDispatch();
    const [quantity, setQuantity] = useState(0)


    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    const increment = () => {
        if (quantity < productDetail?.rating?.count) {
        setQuantity(quantity+1)
        }
    }

    const addBasket = () => {
        dispatch(addToCart({id: productDetail?.id, title: productDetail?.title, image: productDetail?.image , quantity: productDetail?.quantity, price: productDetail?.price}))
    }
    return (
        <div className='flex gap-10 my-10'>
            <img className='w-[700px] h-[500px] object-cover' src={productDetail?.image} alt='' />
            <div className=''>
                <div className='text-4xl font-bold'>
                    {productDetail?.title}
                </div>
                <div className='my-10 text-2xl'>
                    {productDetail?.description}
                </div>
                <div className='flex items-center'>
                    <span className='font-bold'> Rating </span> : {productDetail?.rating?.rate}  <CiStar />
                </div>
                <div>
                    <span className='font-bold'> Count </span> : {productDetail?.rating?.count}
                </div>
                <div>
                    <span className='font-bold'> Category </span> : {productDetail?.category}
                </div>
                <div className='mt-3'>
                    <span className='text-4xl font-bold'> {productDetail?.price} </span> <span className='font-bold'> ₺ </span>
                </div>
                <div className='flex items-center gap-5 my-4'>
                    <span onClick={decrement} className="inline-flex cursor-pointer items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                       <span className='text-3xl'>-</span> 
                    </span>
                    <input type="text" value={quantity} className='w-12 text-center text-4xl font-bold' />
                    <span className="inline-flex cursor-pointer items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    <span onClick={increment} className='text-3xl'>+</span> 
                    </span>
                </div>
                <div onClick={addBasket} className='border w-200 h-16 flex items-center justify-center rounded-full bg-gray-500 text-white font-bold text-2xl cursor-pointer my-4'>
                    Sepete Ekle
                </div>

            </div>
        </div>
    )
}

export default DetailComp