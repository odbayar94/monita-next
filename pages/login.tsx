import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


const Login: NextPage = () => {
//Hello

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <img src="/logo.png" />
        <h1 className={styles.title}>WishList Web Application </h1>
      </main>
      <footer className={styles.footer}>Powered by Wish Team</footer>
    </div>
  );
};

export default Login;
