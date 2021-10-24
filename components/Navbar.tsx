import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGift,
  faTimes,
  faBars,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const NavBar = ({ children }: any) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="home-container" style={{ display: "flex" }}>
      {sidebar ? (
        <div
          className="nav-bar"
          style={{
            width: "100%",
            height: "100vh",
            background: "rgb(255, 249, 249)",
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "10px",
            }}
          >
            <FontAwesomeIcon
              icon={faTimes}
              color="black"
              onClick={showSidebar}
              style={{ fontSize: "1.5em", marginTop: "10px" }}
            />
          </div>

          <div
            className="nav-profile"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link href="/profile">
              <div
                className="user-card-avatar"
                style={{
                  backgroundImage: `url("https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`,
                  width: "50px",
                  height: "50px",
                  borderRadius: "25px",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                onClick={showSidebar}
              />
            </Link>
            <Link href="/profile">
              <p onClick={showSidebar} style={{ paddingLeft: "15px" }}>
                User name{" "}
              </p>
            </Link>
          </div>
          <div
            className="create-monita-button"
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "15px",
            }}
          >
            <Link href="/create-monita">
              <button
                style={{
                  border: "none",
                  width: "80%",
                  height: "50px",
                  borderRadius: "15px",
                  backgroundColor: "#E94057",
                }}
                onClick={showSidebar}
              >
                Create Group
                <FontAwesomeIcon
                  icon={faPlus}
                  color="black"
                  style={{
                    fontSize: "1em",
                    alignSelf: "center",
                    marginLeft: "8px",
                  }}
                />
              </button>
            </Link>
          </div>
          <div
            className="sidebar-groups-container"
            style={{ marginTop: "15px" }}
          >
            <p style={{ color: "rgba(0, 0, 0, 0.59)" }}>Groups</p>
            <li
              style={{
                display: "flex",
                cursor: "pointer",
                paddingLeft: "15px",
              }}
              onClick={showSidebar}
            >
              <FontAwesomeIcon
                icon={faGift}
                color="black"
                style={{ fontSize: "1em", alignSelf: "center" }}
              />
              <Link href="/monita-groups">
                <p style={{ fontSize: "1em", paddingLeft: "8px" }}>
                  Monita Group 1
                </p>
              </Link>
            </li>
          </div>
          {/* {sideBarData.map((item, index) => {
            return (
              <li
                key={index}
                style={{ display: "flex", cursor: "pointer" }}
                onClick={showSidebar}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  color="black"
                  style={{ fontSize: "1em", alignSelf: "center" }}
                />
                <Link href={item.path}>
                  <p style={{ fontSize: "1em" }}>{item.title}</p>
                </Link>
              </li>
            );
          })} */}
        </div>
      ) : (
        <div style={{ width: "100%" }}>
          <FontAwesomeIcon
            icon={faBars}
            color="black"
            onClick={showSidebar}
            style={{ fontSize: "1.5em" }}
          />
          {children}
        </div>
      )}
    </div>
  );
};

export default NavBar;
