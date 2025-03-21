import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MyCart from "../pages/MyCart";
import ProductDetail from "../pages/ProductDetail";
import MainLayout from "../components/MainLayout";

const router = createBrowserRouter([
    {
    path:"/",
    element:<MainLayout/>,
    children :[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/mycart",
            element:<MyCart/>
        },
        {
            path:"/product-detail/:id",
            element:<ProductDetail/>
        },
    ],
}

])
export default router;