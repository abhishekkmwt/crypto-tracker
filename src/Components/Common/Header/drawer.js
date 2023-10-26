import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";


export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>
        <div className="menu"><MenuIcon /></div>
      </Button>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/compare">Compare</NavLink>
          <NavLink to="/dashboard">
           Dashboard
          </NavLink>
        </div>
      </Drawer>
    </div>
  );
}
