'use client'
import Link from 'next/link'
import React from 'react'
import NewProduct from '../NewProduct/NewProduct'

const Navbar = () => {
  return (
    <div className='flex justify-between px-8 py-12'>
        <Link href={'/'}>Dashboard</Link>
        <NewProduct />
    </div>
  )
}

export default Navbar