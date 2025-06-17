import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import CreateSongPage from "../Pages/CreateSongPage/CreateSongPage";
import ViewSong from "../Pages/ViewSongPage/ViewSongPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            //{path: "signup", element: <SignUpPage />},
            //{path: "login", element: <LoginPage />}
            {path: "createSong", element: <CreateSongPage />},
            {path: "viewSong", element: <ViewSong />}
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