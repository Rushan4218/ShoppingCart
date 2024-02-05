import { NavLink, useLocation } from "react-router-dom"
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { updateValue } from "../redux/inputSlice";
import { RootState } from "../redux/store";


const Navbar = () => {

    const dispatch = useDispatch();
    const userInput: string = useSelector((state: RootState) => state.userInput.value)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateValue(e.target.value))
    }

    const location = useLocation();
    const isStorePage = location.pathname === "/store";

    return (
        <nav className="fixed top-0 bg-green-500 w-full z-50 h-16 flex items-center gap-4 text-green-800 text-2xl px-6 shadow-md shadow-gray-400">
            <NavLink to="/" className="navbar-text">Home</NavLink>
            <NavLink to="store" className="navbar-text">Store</NavLink>
            <NavLink to="about" className="navbar-text">About</NavLink>
            <div className="ml-auto flex items-center gap-4">
                {
                    isStorePage && (
                        <form className="flex relative items-center" onSubmit={handleSubmit}>
                            <input type="input" value={userInput} onChange={handleChange} className="rounded-2xl focus:outline-none h-8 w-64 px-4 py-2 text-sm shadow-inner shadow-gray-500"></input>
                            <button className="absolute top right-0 me-2 text-gray-300 hover:text-gray-400"><FaSearch /></button>
                        </form>
                    )
                }
                <NavLink to="cart"><FaShoppingCart /></NavLink>
            </div>
        </nav> 
    )
}

export default Navbar;