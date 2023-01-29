import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../pages/AddProduct/AddProduct";
import Cart from "../pages/Cart/Cart";
import Features from "../pages/Features/Features";
import Home from "../pages/Home/Home";
import Main from "../pages/Main/Main";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/features',
                element: <Features></Features>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/add-product',
                element: <AddProduct></AddProduct>
            },
        ]
    }
])

export default routes;