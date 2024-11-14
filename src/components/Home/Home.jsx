import "./Home.css"
const Home=()=>{
    return(
        <div className="main-container" >
        
           <div className="welcoming-par">
            
                <h1>Welcome to Bran-tech shpping fashion </h1>
                <p>Welcome to Bran-tech fashion.
                     We offer the best latest fashion dressing .
                      Would you like a one-time 20% discount?</p>
            </div>
            <div className="products-head">
            <h1 className="title">Products Of All Varity</h1>
         <ul>
           
            <li>
                <img className="img-product" src="images/male dressing/westheern world/front-view-man-wearing-native-attire.jpg"></img>
               <div className="buy-price"> <h1>price= 10$</h1>
                <button className="button-buy">Buy</button></div>
            </li>
            <div>
                
            <li>
                <img className="img-shoes"  src="images/male shoes/AdobeStock_116376544_Preview.jpeg"></img>
               <div className="buy-price"> <h1>price= 10$</h1>
                <button className="button-buy">Buy</button></div>
            </li>
            

             <img className="img-shoes"  src="images/male shoes/AdobeStock_219132139_Preview.jpeg"></img>
               <div className="buy-price"> <h1>price= 10$</h1>
                <button className="button-buy">Buy</button></div>
                
            </div>
            <div>
                
                 <li>
                <img className="img-shoes"  src="images/male shoes/AdobeStock_918836378_Preview.jpeg"></img>
               <div className="buy-price"> <h1>price= 10$</h1>
                <button className="button-buy">Buy</button></div>
            </li>
            
             <img className="img-shoes"  src="images/male shoes/AdobeStock_907444400_Preview.jpeg"></img>
               <div className="buy-price"> <h1>price= 10$</h1>
                <button className="button-buy">Buy</button></div>
              
            </div>
            <li>
                <img className="img-product"  src="images/female dressing/african/pexels-bestbe-models-975242-2170387.jpg"></img>
               <div className="buy-price"> <h1>price= 10$</h1>
                <button className="button-buy">Buy</button></div>
            </li>
        </ul></div>

        </div>
    )
}
export default Home;