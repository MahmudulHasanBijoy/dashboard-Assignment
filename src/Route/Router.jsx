import { createBrowserRouter } from "react-router-dom";
import Deashboad from "../Deashboard/Deashboad";
import MyProject from "../Deashboard/MyProject/MyProject";
import NewCard from "../Deashboard/NewCard/NewCard";
import CardDetails from "../Deashboard/NewCard/CardDetails";
import UpdateCard from "../Deashboard/UpdateCard/UpdateCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Deashboad></Deashboad>,
    children: [
      {
        path: "myproject",
        element: <MyProject></MyProject>,
      },
      {
        path: "addprojects",
        element: <NewCard></NewCard>,
      },
      {
        path: "carddetails/:id",
        element: <CardDetails></CardDetails>,
      },
      {
        path: "updatecards/:id",
        element: <UpdateCard></UpdateCard>,
      },
    ],
  },
]);
