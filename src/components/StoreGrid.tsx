import StoreItem from "./StoreItem";
import data from "../data.json";


const StoreGrid = () => {
    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4 m-8 mt-20">
            {
                data.items.map(item => {
                    return (
                        <StoreItem 
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    )
                })
            }
        </div>
    )
}

export default StoreGrid;