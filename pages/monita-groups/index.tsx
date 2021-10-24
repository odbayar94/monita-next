import type { NextPage } from "next";
import React, { useState } from "react";
import GroupUserCard from "../../components/group-user-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faGift } from "@fortawesome/free-solid-svg-icons";

const GroupUsers = [
  {
    name: "Maral",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnELq88FqJJ3fRj93adsIGYvhO-TiVlgimVQ&usqp=CAU",
    active: true,
  },
  {
    name: "Ugtakhbayar",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",
    active: false,
  },
  {
    name: "Subedei",
    imageUrl:
      "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    active: false,
  },
  {
    name: "Gereltuya",
    imageUrl:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    active: true,
  },
  {
    name: "Maral",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnELq88FqJJ3fRj93adsIGYvhO-TiVlgimVQ&usqp=CAU",
    active: true,
  },
  {
    name: "Ugtakhbayar",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",
    active: false,
  },
  {
    name: "Subedei",
    imageUrl:
      "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    active: false,
  },
  {
    name: "Gereltuya",
    imageUrl:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    active: true,
  },
  {
    name: "Maral",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnELq88FqJJ3fRj93adsIGYvhO-TiVlgimVQ&usqp=CAU",
    active: true,
  },
  {
    name: "Ugtakhbayar",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",
    active: false,
  },

  {
    name: "Subedei",
    imageUrl:
      "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    active: false,
  },
  {
    name: "Gereltuya",
    imageUrl:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    active: true,
  },

  {
    name: "Subedei",
    imageUrl:
      "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    active: false,
  },
  {
    name: "Gereltuya",
    imageUrl:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    active: true,
  },
];

const Match = {
  name: "Gereltuya",
  imageUrl:
    "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  active: true,
};
const monitaGroup = () => {
  return (
    <div className="container" style={{ overflow: "scroll" }}>
      <div
        className="groupName"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <p
          style={{
            fontSize: "1.5em",
            fontWeight: 600,
            lineHeight: "36px",
            fontFamily: "Sk-Modernist",
            color: "#ff073a",
            marginTop: "10px",
          }}
        >
          Monita 2021 Nest
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
          marginBottom: "30px",
        }}
      >
        <p
          style={{
            fontSize: "0.8em",
            fontWeight: 400,
            lineHeight: "24px",
            fontStyle: "italic",
          }}
        >
          Ugtakhbayar created this group
        </p>
      </div>

      {/* match */}

      <div
        className="my-match"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "20px",
        }}
      >
        <div className="user-card">
          <div
            className="user-profile"
            style={{
              width: "100px",
              height: "100px",
              border: Match.active ? "2px solid #39ff14" : "2px solid #ff073a",
              borderRadius: "50px",
              margin: "10px",
              backgroundImage: `url("${Match.imageUrl}")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <div>
            <p style={{ textAlign: "center" }}>You</p>
          </div>
        </div>

        <FontAwesomeIcon
          icon={faGift}
          color="#E22140"
          style={{ fontSize: "3em", alignSelf: "center" }}
        />

        <div className="user-card">
          <div
            className="user-profile"
            style={{
              width: "100px",
              height: "100px",
              border: Match.active ? "2px solid #39ff14" : "2px solid #ff073a",
              borderRadius: "50px",
              margin: "10px",
              backgroundImage: `url("${Match.imageUrl}")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <div>
            <p style={{ textAlign: "center" }}>{Match.name}</p>
          </div>
        </div>
      </div>

      {/* match end*/}

      {/* group user lists */}
      <div
        className="group-user-list"
        style={{
          display: "flex",
          flexWrap: "wrap",

          marginLeft: "10px",
          marginRight: "15px",
          // justifyContent: "space-evenly",
        }}
      >
        <p>Monita group's members</p>
        {/* user card */}
        {GroupUsers.map((user, index) => {
          return <GroupUserCard props={user} key={index} />;
        })}
        {/* user card end */}
      </div>

      {/* group user lists end */}
    </div>
  );
};

export default monitaGroup;
