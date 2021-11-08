import React from "react";
import Head from "next/head";
import NextLink from "next/link";
import Header from "components/Header";
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
import { useState } from "react";

export default function Layout({ title, description, children }) {
  const [sidbarVisible, setSidebarVisible] = useState(false);

  const sidebarOpenHandler = () => {
    setSidebarVisible(true);
  };

  const sidebarCloseHandler = () => {
    setSidebarVisible(false);
  };

  return (
    <div>
      <Head>
        <title>{title ? `Монита - ${title}` : "Монита"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>

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
                  <Typography className="title">Үндсэн цэс</Typography>
                </div>
                <div>
                  <IconButton aria-label="close" onClick={sidebarCloseHandler}>
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
      <Container>{children}</Container>
      <footer className="layout__footer">
        <Typography>All rights reserved.</Typography>
      </footer>
    </div>
  );
}
