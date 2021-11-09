import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

// import { loginUser } from "redux/user/userActions"
import { useAppSelector, useAppDispatch } from "redux/hooks";

const Home: NextPage = () => {
  const router = useRouter();

  const userInfo = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    if (!userInfo.name) {
      router.push("/login");
    } else {
      router.push("/profile");
    }
  }, [userInfo]);

  return <div></div>;
};

export default Home;
