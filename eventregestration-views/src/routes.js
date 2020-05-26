import React from "react";
import UserApplication from "./views/user/UserApplication";
import Login from "./layouts/Login";
import AdminApplication from "./views/admin/adminApplication";

export default [
  {
    path: "/dashboard",
    exact: true,
    component: AdminApplication,
  },
  {
    path: "/admin",
    exact: true,
    component: Login,
  },
  {
    path: "/",
    exact: true,
    component: UserApplication,
  },
];
