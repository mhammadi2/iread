import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import ActivitiesDashboard from "../features/activities/ActivitiesDashboard";
import BlogPage from "../features/activities/BlogPage";
import Scratch from "../features/scratch/Scratch";
import ProfilePage from "../features/profiles/ProfilePage";
// // import Scratch from "../../features/scratch/Scratch";
// import AccountPage from "../../features/auth/AccountPage";
// import ProfilePage from "../../features/profiles/ProfilePage";

export const router =createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {path: '/activities', element:<ActivitiesDashboard/>},
            {path: '/blog', element:<BlogPage/>},
            // {path: '/manage/:id', element:<EventForm/>},
            // {path: '/profiles/:id', element: <ProfilePage />},
            // // {path: '/createEvent', element:<EventForm key='create'/>},
            // {path: '/account', element: <AccountPage />},
            {path: '/scratch', element:<Scratch/>},
            {path: '/profiles/:id', element:<ProfilePage/>},
            // Needs to add profile item in signedinMenu

        ]
    }
])