import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector, useAppDispatch } from "redux/hooks";

const Login: NextPage = () => {
  const userInfo = useAppSelector((state) => state.userReducer);

  return (
    <div className="login__container}">
      <main className="login__main">
        <img src="/logo.png" />
        <h1 className="login__title">WishList Web Application </h1>
      </main>
      <footer className="footer">Powered by Wish Team</footer>
    </div>
  );
};

export default Login;
