import { Navbar, Nav } from "react-bootstrap";
import Header from "components/Header";
import { signIn, signOut, useSession } from "next-auth/client";
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

export default () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Navbar className="fj-navbar fj-nav-base" bg="transparent" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
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

          <div>
            <Link href="/profile">
              <Header />
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
              <Link href="/monita-groups/617564c159c35cc71ba515d7">
                <p style={{ fontSize: "1em", paddingLeft: "8px" }}>
                  Monita Group 1
                </p>
              </Link>
            </li>
          </div>
          <a
            href={`/api/auth/signout`}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign out1
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};
