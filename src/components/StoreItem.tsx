import React from "react";

type singleItemProps = {
    id: number,
    image: string,
    name: string,
    price: number
}
const SingleItem: React.FC<singleItemProps> = ({ id, image, name, price}) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex align-center justify-center h-40">
                <img 
                    src={image}
                    alt="Image"
                    className="border-r-2 object-contain"
                />
            </div>
            <span className="text-2xl font-bold ">{name}</span>
            <span className="text">{`$${price}`}</span>
            <button className="bg-green-400 rounded hover:bg-green-500 active:scale-90 transition-transform h-10">Add to cart</button>
        </div>
    )
}

export default SingleItem;