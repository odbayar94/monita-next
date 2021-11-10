import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "redux/hooks";

const MyCreatedGroup = () => {
  const userInfo = useAppSelector((state) => state.userReducer);
  const myGroups = useAppSelector((state) => state.myGroupReducer);
  useEffect(() => {}, []);
  return <div></div>;
};

export default MyCreatedGroup;
