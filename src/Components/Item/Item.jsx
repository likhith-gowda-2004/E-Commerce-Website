import React from 'react'
import './Item.css'

const Item = (props) => {
  const [show, setshow] = React.useState(false)
  const [count, setcount] = React.useState(1)
  const [reloadnavbar, setreloadnavbar] = React.useState(false)
  const addtocart = () => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    if(cart)
    {
      let itemincart = cart.find(item => item.id === props.id)
      if(itemincart)
      {
        cart = cart.map(item => {
          if(item.id === props.id)
          {
            return {
              ...item,
              quantity: item.quantity + count
            }
          }
          else
          {
            return item
          }
        })
        localStorage.setItem('cart', JSON.stringify(cart))
      }
      else
      {
        cart = [
          ...cart,
          {
            props: props,
            quantity: count
          }
        ]
      }
    }
    else
    {
      cart = [{props, quantity: count}]
      localStorage.setItem('cart', JSON.stringify(cart))
    }
    window.location.reload()
    setreloadnavbar(!reloadnavbar)
  }
  return (
    <div className = 'item'>
        <img src = {props.image} alt =""/>
        <p>{props.name}</p>
        <div className ="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="items-price-old">
                {props.old_price}
            </div>
        </div>
        {
          show ? 
          <div className="add-button">
            <div className="qty">
              <button onClick={() => {if(qty > 1){setqty(qty - 1)}}}>-</button>
              <p>{qty}</p>
              <button onClick={() => setqty(qty + 1)}>+</button>
            </div>
            <button className='add-to-cart' onClick={() => {addtocart()}}>Add to cart</button>
          </div>
          :
          <div className="add-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={() => setshow(true)}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
        }
    </div>
  );
};

export default Item;

