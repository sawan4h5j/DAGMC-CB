
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../page/login/Login";
import SignUp from "../page/Signup/SignUp";
import Home from "../page/Home/Home";

import ErrorPage from "../page/errorPage/ErrorPage";
// import Profile from "../page/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import Gallery from "../page/Gallery/Gallery";
import PanelFirst from "../page/PanelFirst/PanelFirst";


import PanelThird from "../page/PanelThird.jsx/PanelThird";
import AboutUs from "../page/AboutUs/AboutUs";
import Dashboard from "../Layout/Dashboard";
import Profile from "../page/Dashboard/Profile/Profile";
import UploadImage from "../page/UploadImage/UploadImage";
import AdminRoute from "./AdminRoute";

import PanelSecond from "../page/PanelSecend.jsx/PanelSecend";
import WorkShop from "../page/E-workshop/WorkShop";
import TeacherPanel from "../page/Teacher Panel/TeacherPanel";
import Betorko from "../components/Betorko";
import Shongshodeo from "../page/DebatineTopics/Shongshodeo/Shongshodeo";
import Baroari from "../page/DebatineTopics/Baroari/Baroari";
import Sonatoni from "../page/DebatineTopics/Sonatoni/Sonatoni";
import Bipi from "../page/DebatineTopics/Bipi/Bipi";
// import WorkTest from "../page/E-workshop/WorkTest";
// import EWorkShop from "../page/E-workshop/EworkShop";
// import Profile from "../page/Profile/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            // {
            //     path: '/panel-member',
            //     element: <Panel />
            // },

            {
                path: '/gallery',
                element: <Gallery />
            },
            {
                path: "/panel-member1",
                element: <PanelFirst />
            },
            {
                path: "/panel-member2",
                element: <PanelSecond />
            },
            {
                path: "/panel-member3",
                element: <PanelThird />
            },
            {
                path: '/aboutUs',
                element: <AboutUs />
            },
            // {
            //     path: '/aboutUs',
            //     element: <AboutUs />
            // },
            {
                path: '/panel-member0',
                element: <TeacherPanel/>
            },
            {
                path:'/e-workshop',
                element:<WorkShop/>
                // element:<WorkTest/>
            },
            {
                path:'/Betorko',
                element:<Betorko/>
                // element:<WorkTest/>
            },
            {
                path:'/shongshodeo',
                element:<Shongshodeo/>
                
            },
            {
                path:'/baroari',
                element:<Baroari/>
                
            },
            {
                path:'/sonatoni',
                element:<Sonatoni/>
                
            },
            {
                path:'/bipi',
                element:<Bipi/>
                // element:<WorkTest/>
            }

        ]
    },

    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: "profile",
                element: <PrivateRoute><Profile /></PrivateRoute>,
            },
            {
                path: "uploadImage",
                element: <AdminRoute><UploadImage /></AdminRoute>,
            }
        ]
    },
]);

export default router;
