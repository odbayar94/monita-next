import React, { useState, useEffect } from "react";
import Head from "next/head";
import NextLink from "next/link";
import Header from "components/Header";
import { useAppSelector, useAppDispatch } from "redux/hooks";
import { signIn, signOut, useSession } from "next-auth/client";

import {
  faHome,
  faGift,
  faTimes,
  faBars,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemText,
  ListItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";

export default function Layout({ children }) {
  const [sidbarVisible, setSidebarVisible] = useState(false);
  const [name, setName] = useState("");
  const userInfo = useAppSelector((state) => state.userReducer);
  const myGroup = useAppSelector((state) => state.myGroupReducer);

  const sidebarOpenHandler = () => {
    setSidebarVisible(true);
  };

  const sidebarCloseHandler = () => {
    setSidebarVisible(false);
  };

  useEffect(() => {
    setName(userInfo.name);
  }, [userInfo]);

  return (
    <div className="basic">
      <div>
        <AppBar position="static" className="layout__navbar">
          <Toolbar className="layout__toolbar">
            <IconButton
              edge="start"
              onClick={sidebarOpenHandler}
              className="layout__menu-button"
            >
              <MenuIcon className="layout__navbar-button" />
            </IconButton>

            <Drawer
              anchor="left"
              open={sidbarVisible}
              onClose={sidebarCloseHandler}
            >
              <List>
                <ListItem className="layout__header-section">
                  <div>
                    <Typography className="title" component={"span"}>
                      Үндсэн цэс
                    </Typography>
                  </div>
                  <div>
                    <IconButton
                      aria-label="close"
                      onClick={sidebarCloseHandler}
                    >
                      <CancelIcon />
                    </IconButton>
                  </div>
                </ListItem>
                <NextLink href={`/create-monita`} passHref>
                  <ListItem button component="a" onClick={sidebarCloseHandler}>
                    <button className="layout__button">
                      <FontAwesomeIcon
                        icon={faPlus}
                        color="white"
                        style={{
                          fontSize: "1em",
                          alignSelf: "center",
                          marginRight: "8px",
                        }}
                      />
                      Монита груп үүсгэх
                    </button>
                  </ListItem>
                </NextLink>
              </List>
            </Drawer>
            <div>
              <Header />
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div>
        <Container className="basic__container">{children}</Container>
      </div>

      <div className="basic__footer">
        <Typography component={"span"}>All rights reserved</Typography>
      </div>
    </div>
  );
}
