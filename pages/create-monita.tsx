import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useSnackbar } from "notistack";
import { Controller, useForm } from "react-hook-form";
import { List, ListItem, TextField, Button } from "@material-ui/core";
import { useAppSelector, useAppDispatch } from "redux/hooks";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/router";

//import CSS
import "react-dropdown/style.css";
import "react-datepicker/dist/react-datepicker.css";

//Import my components
import { createMonitaPost } from "../lib/api";
import { style } from "@mui/system";

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
  const userInfo = useAppSelector((state) => state.userReducer);

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

    const data = {
      createdUser: {
        name: userInfo.name,
        email: userInfo.email,
        image: userInfo.image,
      },
      name,
      description,
      endDate: date,
    };

    const groupId = await createMonitaPost(data);

    if (groupId) {
      enqueueSnackbar("Монита групп амжилттай үүслээ", {
        variant: "success",
      });
      router.push(`/monita-groups/${groupId}`);
    } else {
      enqueueSnackbar("Монита үүсгэхэд алдаа гарлаа", {
        variant: "error",
      });
    }
  };

  const handleDateChange = (date: any) => {
    setDate(date);
  };

  useEffect(() => {
    console.log("username: " + userInfo.name);
  }, []);
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
            // dateFormat="Pp"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </ListItem>

        <ListItem>
          <Button
            disabled={!userInfo.name}
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
