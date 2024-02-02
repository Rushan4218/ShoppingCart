import React from "react";
import { 
    Route,
    RouterProvider,
    createBrowserRouter, 
    createRoutesFromElements 
} from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Cart from "./pages/Cart";

const App: React.FC = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />}/>
                <Route path="about" element={<About />}/>
                <Route path="store" element={<Store />}/>
                <Route path="cart" element={<Cart />}/>
            </Route>
        )
    )
    return (
        <RouterProvider router={router} />
    )
}

export default App;