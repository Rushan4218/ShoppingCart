import { useSelector } from "react-redux";

import { RootState } from "../redux/store";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";

const CartItems = () => {

    // const cartItems: cartItemType[] = useSelector((state: RootState) => state.cartContent.cartItems);
    // const price: number = useSelector((state: RootState) => state.cartContent.price);
    // const itemsQuantity: number = useSelector((state: RootState) => state.cartContent.itemsQuantity);
    
    const cartContent = useSelector((state: RootState) => state.cartContent);
    const cartItems = cartContent.cartItems;
    const price = cartContent.price;
    const itemsQuantity = cartContent.itemsQuantity;
    
    return (
        <div className="flex mt-20">
            <div className="flex flex-col gap-4 w-full h-full bg-blue-500">
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
            <div className="mx-8 bg-red-500 flex flex-col">
                <div>Order Summary</div>
                <div className="flex justify-between">
                    <span>{`Subtotal (${itemsQuantity} items)`}</span>
                    <span>{`$${price}`}</span>
                </div>
                <div className="flex justify-between">
                    <span>Shipping Fee</span>
                    <span>$190</span>
                </div>
                <form className="flex justify-between">
                    <input type="input" placeholder="Enter Voucher Code"></input>
                    <button>Apply</button>
                </form>
                <div className="flex justify-between">
                    <span>Total</span>
                    <span>{`$${price - 190}`}</span>    
                </div>
                <button>Place Order</button>
            </div>
        </div>

        
    )
}

export default CartItems;