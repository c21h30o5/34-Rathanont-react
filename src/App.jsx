import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import Admin from "./views/AdminHomeView";
import User from "./views/UserHomeView";
import Owner from "./views/Owner";
import AdminHomeView from "./views/AdminHomeView";
import UserHomeView from "./views/UserHomeView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl">404 - Page Not Found</h1>
      </div>
    ),
    children: [
      {path: "/",element: <Home />},
      {path: "admin",element: <AdminHomeView />},
      {path: "user",element: <UserHomeView />},
      {path: "owner",element: <Owner />},
    ]
  }
])

export default function App() {

  return (
    <RouterProvider router={router}/>
  );
};