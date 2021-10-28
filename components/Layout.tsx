import React, { Children } from "react";
import NavBar from "./Navbar";
import Header from "components/Header";

export const Layout = ({ children }) => {
  return (
    <div className="content" style={{ width: "100%" }}>
       <Header/>
      <NavBar children={children} />
      {/* {children} */}
    </div>
  );
};