import React, { Children } from "react";
import NavBar from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <div className="content" style={{ width: "100%" }}>
      <NavBar children={children} />
      {/* {children} */}
    </div>
  );
};
