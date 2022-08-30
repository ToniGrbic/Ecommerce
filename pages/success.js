import React , { useState, useEffect }from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'

import { useGlobalContext } from '../context/stateContext'

const Success = () => {

  const {setCartItems, setTotalPrice, setTotalQuantities } = useGlobalContext()

  useEffect(()=>{
    setCartItems([])
    setTotalPrice(0)
    setTotalQuantities(0)
  }, [])
  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className="icon">
                <BsBagCheckFill/>
            </p>
            <h2>Thank you for your order</h2>
            <p className='email-msg'>Check your email for the receipt</p>
            <Link href="/">
                <button type="button" width="300px" className="btn">
                    Continue Shopping
                </button>
            </Link>
        </div>

    </div>
  )
}

export default Success