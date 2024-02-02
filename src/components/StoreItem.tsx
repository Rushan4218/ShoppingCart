import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

type singleItemProps = {
    id: number,
    image: string,
    name: string,
    price: number
}
const SingleItem: React.FC<singleItemProps> = ({ image, name, price }) => {

    const value: string = useSelector((state: RootState) => state.userInput.value);

    let quantity: number = 0;
    return ( 
        <>
        {
            name.toLowerCase().includes(value.toLowerCase()) && (
                <div className="flex flex-col gap-2 bg-white p-4 rounded-lg shadow-md shadow-gray-400">
                    <div className="flex align-center justify-center h-40">
                        <img 
                            src={image}
                            alt="Image"
                            className="border-r-2 object-contain border-none"
                        />
                    </div>
                    <span className="text-2xl font-bold ">{name}</span>
                    <span className="text">{`$${price}`}</span>
                    {
                        (quantity === 0) ? (
                            <button className="bg-green-400 rounded hover:bg-green-500 active:scale-90 transition-transform h-10 shadow-md active:shadow shadow-gray-400">Add to cart</button> 
                        ) : (
                            <div>
                                <span>{`${quantity} items in cart`}</span>
                            </div> 
                        )
                    }
                </div>
            )
        }
        </>
                  
        )
}


export default SingleItem;