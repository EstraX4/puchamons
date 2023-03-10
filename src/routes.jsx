import React from "react";
import { Routes, Route, Navigate, useRoutes } from "react-router-dom";
import Layaut from "./pages/Layaut";
import Catolegue from "./pages/Catolegue";
import Datos from "./pages/Datos";
import Inicio from "./pages/Inicio";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layaut />,
      children: [
        { element: <Inicio />, index: true },
        { path: "catologue", element: <Catolegue /> },
      ],
    },
    {
      path: "/datos",
      element: <Layaut />,
      children: [
        { element: <Datos />, index: true },
        { path: "/datos/:id", element: <Datos /> },
      ],
    },
    {
      element: <Layaut />,
      children: [
        { element: <Inicio />, index: true },
        { path: "404", element: <Inicio /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
