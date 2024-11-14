
import './navbar.css'
const Navbar = () => {
  return (//<div>
     //<marquee><p> welcome to brand</p> </marquee></div>
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          ShopNow
        </a>
      </div>
      <div className="navbar-center">
        <ul>
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/Product">Product</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Contact"> Contact </a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href='#'>Sign In</a>
        <a href="/cart" className="cart-icon">
          <img className='w-15 h-10' src='images/icons/add-to-cart.png'></img>
          <span className="cart-count">0</span>
        </a>
      </div>
      <button><img className='w-10 h-10 rounded-sm'  src='images/icons/moon.png'></img></button>
      <button><img className='w-10 h-10 rounded-sm' src='images/icons/sun.png'></img></button>
      </nav> 
  );
};
export default Navbar;
