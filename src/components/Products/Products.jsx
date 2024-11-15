//import React from 'react'
import "./Products.css"
import image1 from '../../../images/female dressing/african/pexels-bigshowlamar-26781712.jpg'



const Prod = (props) => {
    let name = props.name
    return (
        <div className='container-1'>
    <img src={props.image} alt="surc"/>

<div className='price-tag'> 
 <h4>{name}: <span>{props.price}$</span></h4>
 <button>Buy</button>
</div>

</div>
    )
}
export const Products = () => {
  return (
    <div>

        <section className='gap-y-3 flex justify-evenly  w-full mt-6 h-fit bg-white text-black'>

<Prod name={"product1"} price={20} image={image1}/>
<Prod name={"product1"} price={20} image={image1}/>
<Prod name={"product1"} price={20} image={image1}/>



        </section>
    



    </div>
  )
}
export default Products;
