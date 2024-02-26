import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header  from "./component/Header";
import Body from "./component/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";



const AppLayout = ()=>{
  return <div className="app">
    <Header/>
    <Outlet/>
  </div>
}

const Grocery = lazy(()=> import('./component/Grocery'));

const About = lazy(()=> import('./component/About'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error/>,
    children:[
      {
        path:"/",
        element: <Body />,
      },
      {
        path:"/about",
        element: <Suspense fallback={<h1>....loading</h1>}><About /></Suspense>,
      },

      {
        path:'/contact',
        element: <Contact />
      },
      {
        path:"/grocery",
        element: <Suspense fallback={<h1>....loading</h1>}><Grocery /></Suspense>,
      },
      {
        path:"restaurants/:resId",
        element: <RestaurantMenu />
      }

    ]
  },
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
