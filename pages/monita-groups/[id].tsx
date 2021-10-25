import React, { useContext, useEffect, useState } from 'react';
import NextLink from 'next/link';
import Button from '@material-ui/core/Button';
//My Imports
import {getSingleMonita} from '../../lib/api'
import GroupUserCard from "../../components/group-user-card";

export default function MonitaScreen(props: any) {

  const { monitaGroup } = props;
  return (
    <>
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
          {monitaGroup.name}
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
      <div>
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
        {monitaGroup.selectedUsers.map((user, index) => {
          return <GroupUserCard props={user} key={index} />;
        })}
        {/* user card end */}
      </div>

      {/* group user lists end */}
    </div>
    <div style={{display: "flex", justifyContent: "center"}}>
    <Button variant="contained" type="submit" style={{
                  border: "none",
                  width: "80%",
                  marginTop: "2rem",
                  height: "50px",
                  borderRadius: "15px",
                  backgroundColor: "#E94057",
                  
                }}>
                Монита тодруулах
            </Button>
            </div>
      </>
  );
}



export async function getServerSideProps(context: any) {
    const { params } = context;
    const { id } = params;

    const monitaGroup = await getSingleMonita(id);
    return {
      props: {
        monitaGroup
      },
    };
  }