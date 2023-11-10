import React from 'react';
import './Item.css';
import ShopIcon from '@mui/icons-material/Shop';

const Item = (props) => {
  const [show, setshow] = React.useState(false)
  const [qty, setqty] = React.useState(1)
  const addtocart = () => {
    let cart = JSON.parse(localStorage.getItem('cartQuantity'))
    
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
      
    </div>
  )
}

export default Item;

