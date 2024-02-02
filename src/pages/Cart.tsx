import { NavLink } from "react-router-dom";

const Cart = () => {
    return (
        <div className="m-8">
            <h2 className="text-4xl font-bold">Cart is empty, Add some items...</h2>
            <h3>Go to the <NavLink to="../store">Store</NavLink></h3>
        </div>
    )
}

export default Cart;