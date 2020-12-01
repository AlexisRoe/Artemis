import Login from "../Pages/Login";
import Today from "../Pages/Today";

const routes = [
  {
    path: "/day",
    component: Today,
  },
  {
    path: "/",
    component: Login,
  },

  {
    path: "/*",
    component: Login,
  },
];

export default routes;
