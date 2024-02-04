import StoreItem from "./StoreItem";
import data from "../data.json";


const StoreGrid = () => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-8 mt-20 place-items-center">
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