import React from 'react'
import Link from 'next/link'
const Sidewar = () => {
  const handlesidebar = () => {
    const sidewar = document.getElementById("sidewar")
    sidewar.classList.toggle("hidden")
  }
  const closesidewar = () => {
    sidewar.classList.add("hidden")
  }
  return (
    <div id='sidewar' className={`min-h-screen w-72 h-{100vh} p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900 absolute right-1 top-1`}>
    <h2 className='m-3 text-xl flex justify-center font-bold'>shoping Cart</h2><hr></hr>
    <ul className="list-decimal mx-10">
      <p className='m-14'> your cart is empty </p>
    </ul>
    <div className="flex">
      <Link href={"/checkout"}><button className='flex mx-auto text-white bg-indigo-300 px-4 focus:outline-none hover:bg-indigo-600 rounded'>CheckOut</button></Link>
      <button className='flex mx-auto text-white bg-indigo-300 px-4 focus:outline-none hover:bg-indigo-600 rounded'>Clear Cart</button>
    </div>
  </div>
  )
}

export default Sidewar
