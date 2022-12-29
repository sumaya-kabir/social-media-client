import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Home from "../components/Home/Home";
import Media from "../components/Media/Media";
import PostDetails from "../components/Media/PostDetails";
import Messages from "../components/Messages/Messages";
import Login from "../components/Shared/Auth/Login";
import Register from "../components/Shared/Auth/Register";
import Main from "../layouts/Main";
import PrivateRoute from "./PrivateRoute";

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
                path: '/postdetails/:id',
                loader: ({params}) => fetch(`https://socail-media-server.vercel.app/posts/${params.id}`),
                element: <PrivateRoute><PostDetails></PostDetails></PrivateRoute>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/messages',
                element: <Messages></Messages>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    }
])