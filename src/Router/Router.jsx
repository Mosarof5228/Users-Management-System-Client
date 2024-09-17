import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import Update from "../Pages/Update/Update";
import Users from "../Pages/Home/Users";

import {
    createBrowserRouter,

} from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/users',
                element: <Users></Users>,
                loader: () => fetch('http://localhost:5000/users')
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
            }
        ]
    },
]);
