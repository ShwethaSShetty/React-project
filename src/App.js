import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header  from "./component/Header";
import Body from "./component/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import UserContext from "./utils/UserContext";
import User from "./component/User";



const AppLayout = ()=>{
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    //api call
    const data = {
      name: 'Shwetha S Shetty'
    }
    setUserName(data.name);
  } ,[]);

  return( <UserContext.Provider value={ {loggedInUser: userName, setUserName}}>
  <div className="app">
    <Header/>
    <Outlet/>
  </div>
  </UserContext.Provider>
  )
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
