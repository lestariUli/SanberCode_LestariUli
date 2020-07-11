import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">TobaFood_Lestari</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Makanan</Link></li>
                        <li><Link to="/cart">Keranjang</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </nav>  
    )
}

export default Navbar;