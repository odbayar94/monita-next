import type { NextPage } from "next";
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';

// import { loginUser } from "redux/user/userActions"
import { useAppSelector, useAppDispatch } from 'redux/hooks'


const Home: NextPage = () => {

  const router = useRouter();

  const user = useAppSelector(state => state.userReducer); 
  const dispatch = useAppDispatch();



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
