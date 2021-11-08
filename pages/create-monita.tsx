import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/router";
//import CSS
import "react-dropdown/style.css";
import "react-datepicker/dist/react-datepicker.css";

//Eddited
import { useSnackbar } from "notistack";
import { Controller, useForm } from "react-hook-form";
import { List, ListItem, TextField, Button } from "@material-ui/core";

//Date
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import DatePicker from "@mui/lab/DatePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Stack from "@mui/material/Stack";

//Import my components
import { createMonitaPost } from "../lib/api";
import { style } from "@mui/system";
import UserCard from "components/UserCard";

//Types and Interfaces

type Post = {
  author: string;
  content: string;
};
interface IHeader {
  imgUrl?: string;
}
interface INumber {
  number?: string;
}
interface ISelectedUser {
  name?: string;
  email?: string;
  imgUrl?: string;
}

const SelectedUser = ({ email }: ISelectedUser) => {
  return (
    <div className="member">
      <div className="member__name">{email}</div>
    </div>
  );
};

export default function CreateMonitaGroup() {
  const router = useRouter();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [date, setDate] = useState(new Date());

  const submitHandler = async ({ name, description }: any) => {
    closeSnackbar();

    const data = { name, description, startDate: date };
    console.log(data);

    // const groupId = await createMonitaPost(data);
    // if (groupId) {
    //   router.push(`/monita-groups/${groupId}`);
    // }

    // enqueueSnackbar("Монитад оролцох хүний имэйл хаяг оруулна уу", {
    //   variant: "error",
    // });
  };

  const handleDateChange = (date: any) => {
    setDate(date);
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)} className="monita_form">
      <h3 className="title">Монита үүсгэх</h3>
      <List style={{ marginTop: "2rem", fontSize: "2rem" }}>
        <ListItem>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              minLength: 2,
            }}
            render={({ field }) => (
              <TextField
                variant="outlined"
                fullWidth
                id="name"
                label="Нэр"
                inputProps={{ type: "name" }}
                error={Boolean(errors.name)}
                helperText={
                  errors.name
                    ? errors.name.type === "minLength"
                      ? "Нэрийн урт 1 тэмдэгтээс их байна"
                      : "Заавал нэр оруулна уу"
                    : ""
                }
                {...field}
              ></TextField>
            )}
          ></Controller>
        </ListItem>
        <ListItem>
          <Controller
            name="description"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              minLength: 2,
            }}
            render={({ field }) => (
              <TextField
                variant="outlined"
                fullWidth
                id="description"
                label="Дэлгэрэнгүй тайлбар"
                inputProps={{ type: "description" }}
                error={Boolean(errors.description)}
                helperText={
                  errors.description
                    ? errors.description.type === "minLength"
                      ? "Дэлгэрэнгүй урт 1 тэмдэгтээс их байна"
                      : "Дэлгэрэнгүй тайлбар нэр оруулна уу"
                    : ""
                }
                {...field}
              ></TextField>
            )}
          ></Controller>
        </ListItem>

        <ListItem>
          <DatePicker
            selected={date}
            onChange={handleDateChange}
            showTimeSelect
            dateFormat="Pp"
          />
        </ListItem>

        <ListItem>
          <Button
            className="main__button"
            variant="contained"
            type="submit"
            color="secondary"
          >
            Үүсгэх
          </Button>
        </ListItem>
      </List>
    </form>
  );
}

// function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
//     // will resolve posts to type Post[]
//   }

export const getStaticProps = async () => {
  // const postData = await createMonitaPost();
  const data = true;
  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
