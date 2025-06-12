import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import LoginPage from "../Pages/LoginPage/LoginPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            //{path: "signup", element: <SignUpPage />},
            //{path: "login", element: <LoginPage />}
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