import { useSelector } from "react-redux";

import { RootState } from "../redux/store";
import { cartItemType } from "../redux/cartSlice";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";

const CartItems = () => {

    const cartItems: cartItemType[] = useSelector((state: RootState) => state.cartContent.cartItems);
    console.log(cartItems.length);
    return (
        <div className="mt-20 flex flex-col gap-4 w-full h-full">
            {
                (cartItems.length > 0)? (
                    cartItems.map(item => {
                    return  <CartItem 
                                key={item.id}
                                id={item.id}
                                quantity={item.quantity}
                            />
                    })
                ) : (
                    <div className="flex flex-col gap-6 items-center justify-center"> 
                        <h1>There are no items in the cart.</h1>
                        <NavLink to="../store">
                            <button className="border-2 border-green-500 px-4 py-2 text-green-500 hover:bg-green-100">Continue Shopping</button>
                        </NavLink>
                    </div>
                )
            }
        </div>
        
    )
}

export default CartItems;