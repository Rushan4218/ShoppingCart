import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../redux/cartSlice";
import { useEffect } from "react";

const CartItems = () => {

    // const cartItems: cartItemType[] = useSelector((state: RootState) => state.cartContent.cartItems);
    // const price: number = useSelector((state: RootState) => state.cartContent.price);
    // const itemsQuantity: number = useSelector((state: RootState) => state.cartContent.itemsQuantity);
    
    const cartContent = useSelector((state: RootState) => state.cartContent);
    const cartItems = cartContent.cartItems;
    const price = cartContent.price;
    const itemsQuantity = cartContent.itemsQuantity;

    console.log(price);

    useEffect(() => {
        localStorage.setItem("CARTITEMS", JSON.stringify(cartItems));
    }, [cartItems]);
    
    useEffect(() => {
        localStorage.setItem("PRICE", JSON.stringify(price));
    }, [price]);

    useEffect(() => {
        localStorage.setItem("ITEMSQUANTITY", JSON.stringify(itemsQuantity));
    }, [itemsQuantity]);

    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Sorry, The voucher code is invalid!");
    }
    const handleOrderPlaced = () => {
        alert("The order has been placed.");
        dispatch(clearCart());
    }
    
    return (
        <div className="flex mt-24">
            <div className="flex flex-col gap-4 w-full h-full">
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
            {
                cartItems.length > 0 && (
                    <div className="mx-8 bg-white flex flex-col gap-4 p-5 rounded shadow-md shadow-gray-400">
                        <div className="text-2xl">Order Summary</div>
                        <div className="flex justify-between">
                            <span>{`Subtotal (${itemsQuantity} items)`}</span>
                            <span>{`$${price}`}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping Fee</span>
                            <span>$20</span>
                        </div>
                        <form className="flex justify-between gap-2" onSubmit={handleSubmit}>
                            <input className="bg-gray-200 p-2 rounded focus:outline-blue-500"type="input" placeholder="Enter Voucher Code"></input>
                            <button className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600 shadow-md shadow-gray-400 duration-300 active:scale-90 active:shadow-sm">Apply</button>
                        </form>
                        <div className="flex justify-between">
                            <span>Total</span>
                            <span className="text-xl text-green-600">{`$${price + 20}`}</span>    
                        </div>
                        <button onClick={handleOrderPlaced} className="bg-green-400 p-2 text-xl text-white rounded hover:bg-green-500 shadow-md shadow-gray-400 active:scale-90 duration-300     active:shadow-sm">Place Order</button>
                    </div>
                )
            }
            
        </div>

        
    )
}

export default CartItems;