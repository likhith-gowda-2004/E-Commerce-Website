import React from 'react'
<<<<<<< HEAD
import Navbar from '../../Components/Navbar/Navbar'
import './Clothing.css'
import Item from '../../Components/Item/Item';
import women from '../../Assets/womens';
import men from '../../Assets/mens';
import kid from '../../Assets/kids';

const Clothing = () => {
  return (
    <div >
        <Navbar />
        <div className ="mens">
          <h1>
            Men's wear
          </h1>
          <hr/>
          
          <div className = "collections">
            {men.map((item,i)=>
            {
              return <Item key = {i} id = {men.id} name = {item.name} image ={item.image} new_price = {item.new_price} old_price ={item.old_price}/>
            })}
          </div>
          
        </div>
    
        <div className = 'womens'>
            <h1>
              Women's wear
            </h1>
            <hr/>
            <div className = "collections">
            {women.map((item,i)=>
            {
              return <Item key = {i} id = {men.id} name = {item.name} image ={item.image} new_price = {item.new_price} old_price ={item.old_price}/>
            })}
          </div>


        </div>
        <div className='kids'>
        <h1>
              kids's wear
            </h1>
            <hr/>
            <div className = "collections">
            {kid.map((item,i)=>
            {
              return <Item key = {i} id = {men.id} name = {item.name} image ={item.image} new_price = {item.new_price} old_price ={item.old_price}/>
            })}
         </div>
=======

const Clothing = () => {
  return (
    <div>
        <p>Clothing</p>
>>>>>>> 6de807d69ce68024b176c8a9a6caab8d8781ac15
    </div>
    </div>
   ) ;
  
}

export default Clothing
