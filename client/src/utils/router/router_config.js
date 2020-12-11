import Login from "../../Pages/Login";
import Today from "../../Pages/Today";
import Event from "../../Pages/Event";
import Menu from "../../Pages/Menu";

const routes = [
  {
    path: "/menu",
    component: Menu,
  },
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
