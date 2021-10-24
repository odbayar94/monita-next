import React from "react";

interface IUserCard {
  props: any;
}

export const GroupUserCard = ({ props }: IUserCard) => {
  const { imageUrl, email, active } = props;
  return (
    <div
      className="user-card"
      style={{
        width: "100%",
        height: "50px",
        // border: "1px solid red",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        borderRadius: "25px",
        display: "flex",
        alignItems: "center",
        margin: "5px",
      }}
    >
      <div
        className="user-card-avatar"
        style={{
          backgroundImage: `url("${imageUrl}")`,
          width: "50px",
          height: "50px",
          borderRadius: "25px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          border: active ? "2px solid #39ff14" : "2px solid #ff073a",
        }}
      />
      <p style={{ marginLeft: "20px" }}>{email}</p>
    </div>
  );
};

export default GroupUserCard;
