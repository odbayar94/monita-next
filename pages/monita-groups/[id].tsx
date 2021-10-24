import React, { useContext, useEffect, useState } from 'react';
import NextLink from 'next/link';

//My Imports
import {getSingleMonita} from '../../lib/api'
import GroupUserCard from "../../components/group-user-card";
import { Layout } from '../../components/Layout1';

export default function MonitaScreen(props: any) {

  const { monitaGroup } = props;
  return (
    <>
    <Layout>
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
    </Layout>
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