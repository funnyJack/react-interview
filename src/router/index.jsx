import { Navigate,createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import People from "../pages/People";

const routes = [
    {
        path:"/",
        Component:Home,
        Children: [
            {
                path:"/",
                element:<Navigate to = "home" />
            },
            {
                path:"/people",
                Component: People
            }
        ]
    }
]

export default createBrowserRouter(routes);