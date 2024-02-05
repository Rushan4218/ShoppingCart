import { IoIosAdd } from "react-icons/io";
import data from "../data.json";
import { RiSubtractFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeItem } from "../redux/cartSlice";


type cartItemProps = {
    id: number,
    quantity: number
}

const CartItem: React.FC<cartItemProps> = ({ id, quantity }) => {

    const itemPrice = data.items.find(item => item.id === id)?.price;
    
    const dispatch = useDispatch()

    const handleIncrease = () => {
        dispatch(increaseQuantity({id, itemPrice}));
    }

    const handleDecrease = () => {
        dispatch(decreaseQuantity({id, itemPrice}));
    }
    
    const handleRemove = () => {
        dispatch(removeItem({id, itemPrice, quantity}));
    }

    const currentItem = data.items.find(item => item.id === id);
   
    return (
        <>
            {
                currentItem && (
                    <div className="h-16 bg-white flex items-center justify-between w-11/12 max-w-4xl self-center rounded-2xl p-2">
                        <div className="h-full flex justify-center items-center w-16 rounded-2xl">
                            <img 
                                className="h-full"
                                src={currentItem.image}
                                alt="IMAGE"
                            />
                        </div>
                        <div className="w-2/5">{currentItem.name}</div>
                        <div className="flex items-center bg-gray-200 rounded-3xl gap-3">
                            <button onClick={handleDecrease} className="cart-button"><RiSubtractFill /></button>
                            <div className="font-bold text-green-900">
                                {quantity}
                            </div> 
                            <button onClick={handleIncrease} className="cart-button"><IoIosAdd /></button>
                        </div>
                        <div className="w-16">{`$${currentItem.price * quantity}`}</div>
                        <button onClick={handleRemove} className="bg-red-500 h-full rounded-lg text-2xl w-12 flex items-center justify-center text-white shadow-lg shadow-gray-400 hover:bg-red-600 active:scale-90 duration-300 active:shadow-md">
                            <MdDelete />   
                        </button>   
                    </div>
                )
            }
        </>
    )
}

export default CartItem;