import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import StoreItem from "../components/StoreItem";

const RootLayout = () => {
    return (
        <div>
            <nav className="bg-green-500 h-16 flex items-center gap-4 text-green-800 text-2xl px-6">
                <NavLink to="/" className="navbar-text">Home</NavLink>
                <NavLink to="store" className="navbar-text">Store</NavLink>
                <NavLink to="about" className="navbar-text">About</NavLink>
                <NavLink to="cart" className="ml-auto"><FaShoppingCart /></NavLink>
            </nav> 
            <Outlet />      
        </div>
    )
}

export default RootLayout;