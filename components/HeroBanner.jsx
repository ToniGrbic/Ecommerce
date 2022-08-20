import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
const HeroBanner = ({heroBanner:{smallText, midText, image, product, buttonText, desc, discount}}) => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beats-solo'>{smallText} {discount} </p>
        </div>
        <h3> {midText}</h3>
        <h1 className='largeText'></h1>
        <img src={urlFor(image)} alt="headphones"
         className="hero-banner-image"/>
         <div>
            <Link href={`/product/${product}`}>
                <button type="button">{buttonText}</button>
            </Link>
                
                <div className='desc'>
                    <h5>Description</h5>
                    <p>{desc}</p>
                </div>
            
         </div>
    </div>
  )
}

export default HeroBanner