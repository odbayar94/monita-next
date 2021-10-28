import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import FacebookLogin from 'react-facebook-login';

const Login: NextPage = () => {
//Hello
const responseFacebook = (response) => {
  console.log(response);
}

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <img src="/logo.png" />
        <h1 className={styles.title}>WishList Web Application </h1>
        <FacebookLogin
    appId={process.env.FACEBOOK_CLIENT_ID}
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook}
    cssClass="my-facebook-button-class"/>
      </main>
      <footer className={styles.footer}>Powered by Wish Team</footer>
    </div>
  );
};

export default Login;
