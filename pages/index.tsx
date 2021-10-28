import type { NextPage } from "next";
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';


const Home: NextPage = () => {

  const router = useRouter();
  const userInfo = false;
  useEffect(() => {
    if (!userInfo) {
      router.push('/login');
    }else{
      router.push('/profile');
    }
  }, []);

  return (
    <div></div>
    );
};

export default Home;
