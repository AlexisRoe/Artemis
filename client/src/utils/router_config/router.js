import Login from "../../Pages/Login";
import Today from "../../Pages/Today";
import Event from "../../Pages/Event";

const routes = [
  {
    path: "/day/:eventID",
    component: Event,
  },
  {
    path: "/day",
    component: Today,
  },
  {
    path: "/*",
    component: Login,
  },
  {
    path: "/",
    component: Login,
  },
];

export default routes;
