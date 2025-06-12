import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import CreateSongPage from "../Pages/CreateSong/CreateSongPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            //{path: "signup", element: <SignUpPage />},
            //{path: "login", element: <LoginPage />}
            {path: "createSong", element: <CreateSongPage />}
        ]
    },
    {
        path: "/signup",
        element: <SignUpPage/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    }
])