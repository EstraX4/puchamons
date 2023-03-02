import React from "react";
import Menu from "./Menu";
import Chat from "./Chat";
import Panel from "./Panel";

export default function Navbar() {
  return (
    <div className="container-Navbar">
      <Panel />
      <Chat />
      <Menu />
    </div>
  );
}
