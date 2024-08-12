import React from 'react'
import ItemsDetailles from '../ItemProduct/ItemsDetailles'
import { useSelector } from 'react-redux'
const Detailles = () => {
    // const Cartlist=useSelector((state)=>state.cart.CartList)
    const Cartlist = useSelector((state) => state.cart.CartList);

  return (
    <>

{Cartlist.map((todo)=>(
  <ItemsDetailles key={todo.id} name={todo.name} id={todo.id} imgUrl={todo.imgUrl} price={todo.price} />
))}
{/* console.log(Cartlist) */}

    </>)
  
}

export default Detailles

