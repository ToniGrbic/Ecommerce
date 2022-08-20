import React, {createContext, useContext, useState, useEffect}
from 'react'
import {toast} from 'react-hot-toast'

const Context = createContext()

export const StateContext = ({children})=>{
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [qty, setQty] = useState(1)

    let foundProduct
    let index

    const addToCart = ( product, quantity )=>{
        const ProuctInCart = cartItems.find((item)=>item._id === product._id)

        setTotalPrice((prevTotalPrice)=> prevTotalPrice + (product.price * quantity))
        setTotalQuantities((prevTotalQty)=> prevTotalQty + quantity)

        if(ProuctInCart){
            const updatedCartItems = cartItems.map((item)=>{
                if(item._id === product._id)
                    return {...item, quantity:item.quantity+quantity}
                return item
            })
            setCartItems(updatedCartItems)
        }else{
            const newItem = {...product, quantity}
            setCartItems([...cartItems, newItem])
        }
        toast.success(`${qty} ${product.name} added to cart`)
    }


    const toggleCartItemQty = (id, type)=>{
        
        foundProduct = cartItems.find((item)=> item._id === id)
        index = cartItems.findIndex((product)=>product._id === id)
        let newCartItems = cartItems.filter((item) => item._id !== id)
              
         if(type === 'inc'){
            setTotalPrice(prevTotalPrice => prevTotalPrice + foundProduct.price)
            setTotalQuantities(prevTotalQty => prevTotalQty + 1)
            setCartItems([
                ...newCartItems.slice(0,index), 
                {...foundProduct, quantity: foundProduct.quantity+1},
                 ...newCartItems.slice(index)
            ])
        }
        
        if(type === 'dec'){
          if(foundProduct.quantity > 1){
            setTotalPrice(prevTotalPrice => prevTotalPrice - foundProduct.price)
            setTotalQuantities(prevTotalQty => prevTotalQty - 1)
            setCartItems([
                ...newCartItems.slice(0,index), 
                {...foundProduct, quantity: foundProduct.quantity-1},
                 ...newCartItems.slice(index)
            ])
          }
        }
    }

    const onRemove = (id)=>{
        foundProduct = cartItems.find((item)=> item._id === id)
        setCartItems(cartItems.filter((item)=> item._id !== id))
        setTotalPrice((prevTotalPrice) => prevTotalPrice 
        - (foundProduct.price * foundProduct.quantity))
        setTotalQuantities((prevTotalQty)=> prevTotalQty - foundProduct.quantity)
    }

    const changeQty = (type)=>{
        if(type === 'dec'){
            (qty >= 2) && setQty(prev => prev - 1)

        }
        if(type === 'inc'){
            setQty(prev => prev + 1)
        }
    }

    return (
        <Context.Provider
            value={{
                showCart, setShowCart, cartItems, totalPrice,
                totalQuantities, qty, changeQty, addToCart,
                cartItems, toggleCartItemQty, onRemove,
                setCartItems,setTotalPrice, setTotalQuantities 
            }}>
            {children}
        </Context.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(Context)
}

export { Context }

