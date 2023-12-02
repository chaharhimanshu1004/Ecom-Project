
import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/Slices/CartSlice'

function Product({ post }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart")

  }
  function removeFromCart() {
    dispatch(remove(post.id));
    toast.error("Item removed from cart")
  }
  return (
    <div className='flex gap-3 border border-gray-400  hover:border-white p-4 mt-10 rounded-xl ml-5  flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  '>
      <div>
        <p className='text-gray-700 font-semibold mt-1 text-lg text-left truncate w-40'>
          {post.title}
        </p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className='h-[180px]'>
        <img src={post.image} className='h-full w-full ' />
      </div>
      <div className='flex justify-between w-full mt-5 items-center gap-12'>
        <div>
          <p className='text-green-600 font-semibold '>${post.price}</p>
        </div>
        {
          cart.some((p) => p.id === post.id) ?
            (
              <button className='text-gray-700  border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase  hover:bg-gray-700 hover:text-white  transition duration-300 ease-in'
                onClick={removeFromCart}
              >Remove item</button>
              
            ) : (
              <button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase  hover:bg-gray-700 hover:text-white  transition duration-300 ease-in'
                onClick={addToCart}
              >Add to Cart</button>
            )
        }

      </div>




    </div>
  )
}

export default Product
