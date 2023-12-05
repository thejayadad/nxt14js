'use client'
import Navbar from '@/components/Dashboard/Navbar/Navbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default layout