//import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <div>
      <section className=" direction-col flex-wrap  w-full max-h-fit  bg-black text-white flex justify-center ">
        <div className="flex-wrap gap-x-20 gap-y-4 w-full max-h-fit  bg-black text-white flex justify-center ">
         <div className=" flex justify-center items-start flex-col "> 
          <h1>Company</h1>
          <div className="line bg-red-600 w-10 h-0.5"></div>
          <a href="About"> About Us</a>
          <a href="Our Services">Our Services </a>
          <a href="Privacy Policy"> Private Policy</a>
          <a href="Affiliate Programs"> Affiliate Pro.</a>
        </div>
        <div className="  flex justify-center items-start flex-col ">
          <h1>Get Help</h1>
          <div className="line  bg-red-600 w-10 h-0.5"></div>
          <a href="Shipping"> Shipping</a>
          <a href="Returns">Rreturns </a>
          <a href="Order Status">Order Status</a>
          <a href="Affiliate Programs">Payment Options</a>
        </div>
        <div className="flex justify-center items-start flex-col ">
          <h1>Online Shop</h1>
          <div className="line  bg-red-600 w-10 h-0.5"></div>
          <a href="Watch"> </a>
          <a href="SHoes">Shoes </a>
          <a href="Male Dresses"> Male  Dresses</a>
          <a href="Female Dresses">Female Dresses</a>
          <a href="Female Dresses">Clasic Latest Fashion</a>
        </div>
        <div className=" flex justify-center items-start flex-col ">
          <h1>Follow Us</h1>
          <div className="line  bg-red-600 w-10 h-0.5"></div>
          <a href="facebook"><img src="/images/icons/facebook.png"/></a>
          <a href="instagram"><img src="/images/icons/instagram.png" width={35} /> </a>
          <a href="tweeter"> <img src="/images/icons/tweeter.png" width={35}/></a>
          <a href="Linkedin"><img src="/images/icons/linkedin.png" width={35}/> </a>
        
        </div>
        </div>
        <div><h2> ©2024 copyright</h2> </div>
      </section>
    </div>
  )
}

export default Footer