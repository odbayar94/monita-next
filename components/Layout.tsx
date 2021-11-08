import React from "react";
import Head from "next/head";
import NextLink from "next/link";
import Header from "components/Header";
import { signIn, signOut, useSession } from "next-auth/client";

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
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
              <ListItem>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography>Мэдээлэл</Typography>
                  <IconButton aria-label="close" onClick={sidebarCloseHandler}>
                    <CancelIcon />
                  </IconButton>
                </Box>
              </ListItem>
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
