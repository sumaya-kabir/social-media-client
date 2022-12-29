import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Home from "../components/Home/Home";
import Media from "../components/Media/Media";
import Messages from "../components/Messages/Messages";
import Main from "../layouts/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/media',
                element: <Media></Media>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/messages',
                element: <Messages></Messages>
            }
        ]
    }
])