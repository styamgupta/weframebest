import React, { useState } from 'react'
import Link from 'next/link'


const Navbar = () => {

  return (
    <>
      <header className="bg-gray-100 rounded shadow-md sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row keys-center">
          <span className="flex title-font font-medium keys-center text-gray-900 mb-2 md:mb-0">
            <Link className="m-2 hover:text-gray-900 text-xl overflow-hidden" href={"/"}>Shoping</Link>
          </span>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap keys-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-900" href={"/"}>Home</Link>
            <Link className="mr-5 hover:text-gray-900" href={"/tshirt"}>T-shirt</Link>
            <Link className="mr-5 hover:text-gray-900" href={"/mugs"}>Mugs</Link>
            <Link className="mr-5 hover:text-gray-900" href={"/hoddies"}>Hoddies</Link>
          </nav>
        </div>
      </header>

    </>
  )
}


export default Navbar
