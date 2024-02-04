import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


import { RootState } from "../redux/store";
import { cartItemType } from "../redux/cartSlice";

const Cart = () => {

    const cartItems: cartItemType[] = useSelector((state: RootState) => state.cartContent.cartItems)

    return (
        <>
            {
                (cartItems.length !== 0)? (
                    <div className="m-8 mt-20"> full </div>
                ) : (
                    <div className="m-8 mt-20">
                        <h2 className="text-4xl font-bold">Cart is empty, Add some items...</h2>
                        <h3 className="text-2xl font-bold">Go to the <NavLink to="../store" className="text-purple-700 underline">Store</NavLink></h3>
                    </div>
                )
            }
        </>
        
    )
}

export default Cart;