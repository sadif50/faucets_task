import { createBrowserRouter } from "react-router-dom";
import Faq from "../components/Faq/Faq";
import Home from "../components/Home/Home/Home";
import Login from "../components/Login/Login";
import Notice from "../components/Notice/Notice";
import Signup from "../components/Signup/Signup";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <>
                <Notice></Notice>
                <Home></Home>
                </>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            }
        ]
    }
]);

export default router;