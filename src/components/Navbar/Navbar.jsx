import React from "react";
import Menu from "./Menu";
import Chat from "./Chat";
import Panel from "./Panel";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="container-Navbar">
        <Panel />
        <Chat />
        <Menu />
      </div>
    </>
  );
}
