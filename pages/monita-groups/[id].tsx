import React, { useContext, useEffect, useState } from "react";
import NextLink from "next/link";
import Button from "@material-ui/core/Button";
//My Imports
import { getSingleMonita } from "../../lib/api";
import GroupUserCard from "../../components/group-user-card";

export default function MonitaScreen(props: any) {
  const { monitaGroup } = props;

  return (
    <>
      <div className="group">
        <p className="title">{monitaGroup.name}</p>
      </div>
      <div>
        <p className="group__description">{monitaGroup.description}</p>
      </div>
      <div className="group__creator">
        <p>Ugtakhbayar created this group</p>
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
          <p>Монитад оролцох гишүүд:</p>
          {/* user card */}
          {monitaGroup.selectedUsers.map((user: any, index: React.Key) => {
            return <GroupUserCard props={user} key={index} />;
          })}
          {/* user card end */}
        </div>

        {/* group user lists end */}
      </div>
      <div>
        <Button variant="contained" color="secondary" className="main__button">
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
      monitaGroup,
    },
  };
}
