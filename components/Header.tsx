import Link from "next/link";
import React, { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import styles from "./header.module.css";
import { useAppSelector, useAppDispatch } from "redux/hooks";
import { loginUser, logOut } from "redux/user/userActions";

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const [session, loading] = useSession();

  const userInfo = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (session) {
      dispatch(loginUser(session.user) as any);
    }
  }, [session]);

  const logout = () => {
    dispatch(logOut() as any);
  };

  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className={styles.signedInStatus}>
        <div
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.loaded
          }`}
        >
          {!session && (
            <>
              <a
                href={`/api/auth/signin`}
                className={styles.buttonPrimary}
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Нэвтрэх
              </a>
            </>
          )}

          {session && (
            <Link href={`/profile`}>
              <div className={styles.header}>
                <div>
                  {session.user.image && (
                    <span
                      style={{ backgroundImage: `url(${session.user.image})` }}
                      className={styles.avatar}
                    />
                  )}
                </div>
                <div>
                  <span className={styles.signed}>
                    <strong>{session.user.name}</strong>
                  </span>
                </div>
                <div>
                  <a
                    href={`/api/auth/signout`}
                    className={styles.button}
                    onClick={(e) => {
                      e.preventDefault();
                      signOut();
                      console.log("name: " + userInfo.name);
                      logout();
                    }}
                  >
                    Гарах
                  </a>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
