import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "@auth0/nextjs-auth0";

const Home: NextPage = () => {
  const user = useUser();
  console.log("user", user);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmGKNpbNOAwxlmucC267OjGX9A-tM6uKvzQ&usqp=CAU" />
        <h1 className={styles.title}>WishList Web Application </h1>
        <Link href="/api/auth/login">
          <button
            style={{
              border: "none",
              width: "80%",
              height: "50px",
              borderRadius: "15px",
              backgroundColor: "#E94057",
              fontSize: "1em",
              fontWeight: 600,
              margin: "10px",
            }}
          >
            Log In
          </button>
        </Link>
        <Link href="/api/auth/login">
          <button
            style={{
              border: "none",
              width: "80%",
              height: "50px",
              borderRadius: "15px",
              backgroundColor: "pink",
              fontSize: "1em",
              fontWeight: 600,
            }}
          >
            Sign Up
          </button>
        </Link>
      </main>
      <footer className={styles.footer}>Powered by Wish Team</footer>
    </div>
  );
};

export default Home;
