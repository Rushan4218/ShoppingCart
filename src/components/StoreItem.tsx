import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { IoIosAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

import { RootState } from "../redux/store";
import { cartItemType, addItem, increaseQuantity, decreaseQuantity, removeItem } from "../redux/cartSlice";


type singleItemProps = {
    id: number,
    image: string,
    name: string,
    price: number
}
const SingleItem: React.FC<singleItemProps> = ({ id, image, name, price}) => {

    const value: string = useSelector((state: RootState) => state.userInput.value);

    
    const cartItems: cartItemType[] = useSelector((state: RootState) => state.cartContent.cartItems);
    
    const quantity = cartItems.find(item => id === item.id)?.quantity;

    const dispatch = useDispatch();
    
    const handleAdd = () => {
        dispatch(addItem({id, price}));
    }
    const handleIncrease = () => {
        dispatch(increaseQuantity({id, price}));
    }
    const handleDecrease = () => {
        dispatch(decreaseQuantity({id, price}));
    }
    
    const handleRemove = () => {
        dispatch(removeItem({id, price, quantity}));
    }

    useEffect(() => {
        localStorage.setItem("CARTITEMS", JSON.stringify(cartItems));
    }, [cartItems]);
    
    return ( 
        <>
        {
            name.toLowerCase().includes(value.toLowerCase()) && (
                <div className="flex flex-col gap-2 bg-white p-4 rounded-lg shadow-md shadow-gray-400 w-72">
                    <div className="flex align-center justify-center h-40">
                        <img 
                            src={image}
                            alt="Image"
                            className="border-r-2 object-contain border-none"
                        />
                    </div>
                    <span className="text-2xl font-bold ">{name}</span>
                    <span className="text">{`$${price}`}</span>
                    <div className="h-10">
                        {
                            (!quantity) ? (
                                <button onClick={handleAdd} className="bg-green-400 w-full font-bold text-white rounded hover:bg-green-500 active:scale-90 transition-transform h-full shadow-md active:shadow shadow-gray-400">Add to cart</button> 
                            ) : (
                                <div className="h-full w-full flex items-center gap-4">
                                    <div className="flex items-center gap-4 flex-1 bg-gray-200 justify-between h-full rounded-2xl">
                                        <button onClick={handleDecrease} className="button"><RiSubtractFill /></button>
                                        <div className="font-bold text-green-900 leading-4">
                                            {
                                                `${quantity} ${(quantity > 1)? "items" : "item"} in cart`
                                            }
                                        </div> 
                                        <button onClick={handleIncrease} className="button"><IoIosAdd /></button>
                                    </div>
                                    <button onClick={handleRemove} className="bg-red-500 h-full rounded-lg text-2xl w-12 flex items-center justify-center text-white shadow-lg shadow-gray-400 hover:bg-red-600 active:scale-90 duration-300 active:shadow-md">
                                        <MdDelete />   
                                    </button>   
                                </div>
                            )
                        }
                    </div>
                </div>
            )
        }
        </>
                  
        )
}


export default SingleItem;