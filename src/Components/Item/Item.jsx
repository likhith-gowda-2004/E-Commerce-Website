import React from 'react';
import './Item.css';
import ShopIcon from '@mui/icons-material/Shop';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Item = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          ${props.new_price}
        </div>
        <div className="item-price-old">
          {props.old_price}
        </div>
        <div className="item-buttons">
    <AddShoppingCartIcon className="add-shopping-cart-icon"/>
    <ShopIcon className="shop-icon"/>
       </div>

      </div>
     
    </div>
  );
};

export default Item;

