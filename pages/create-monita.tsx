import React, { useState } from "react";
import styles from "../styles/sass/createMonitaPage.module.scss";
import validator from 'validator';
import { useRouter } from 'next/router';
//import CSS
import 'react-dropdown/style.css';
import "react-datepicker/dist/react-datepicker.css";

//Eddited
import { useSnackbar } from 'notistack';
import { Controller, useForm } from 'react-hook-form';
import {
    List,
    ListItem,
    Typography,
    TextField,
    Button,
    Link,
  } from '@material-ui/core';

//Date
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';

//Import my components
import {createMonitaPost} from '../lib/api';
import { style } from "@mui/system";
import { Layout } from "../components/Layout1";
import UserCard from "../components/UserCard";



//Types and Interfaces

type Post = {
  author: string
  content: string
}
interface IHeader {
	imgUrl?: string;
}
interface INumber{
    number?: string;
}
interface ISelectedUser{
    name?: string;
    email?: string;
    imgUrl?: string;
}


const Header = ()=>{
    return(
        <div className={styles.create_monita__header}>
            <img src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=jess-bailey-f94JPVrDbnY-unsplash.jpg" alt=""/>
        </div>
    )
}



const SelectedUser = ({email}: ISelectedUser) =>{
    return (
        <div className={styles.member}>
            <div className={styles.member__name}>
                {email}
            </div>
        </div>
    );
    }

    

export default  function CreateMonitaGroup(){
    const router = useRouter();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const {handleSubmit, control,formState: { errors }} = useForm();


    const [value, setDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [emailError, setEmailError] = useState("");
    


    const submitHandler = async ({name} : any) => {
        closeSnackbar();
        if(selectedUsers.length !== 0){
            const users = selectedUsers.map(el => ({email:el, name: null, imageUrl: null}))
            
            const data = {name, description: "", endDate, selectedUsers: users}
          
            const groupId = await createMonitaPost(data);
            if(groupId){
                router.push(`/monita-groups/${groupId}`);
            }
        }else{
            enqueueSnackbar("Монитад оролцох хүний имэйл хаяг оруулна уу", { variant: "error" });
        }
        
      };

    // const [selectedUsers, setSelectedUsers] = useState<Array<any>>([]);
    const [selectedUsers, setSelectedUsers] = useState([]);

    // const [selectedUsers, setSelectedUsers] = useState(() => new Set());

    const [infoMessage, setInfoMessage] = useState("");
    const [selectUser, setSelectUser] = useState("");
    const [state, setState] = useState({
        name: "",
        description: "",
      });

    // const defaultImgUrl = "https://www.smartdatajob.com/images/joomlart/demo/default.jpg";
    // const options = ["1", "2", "3"];
    // const defaultOption = options[0];

//Songoson hereglegchiig custom data uusgej yvav
    // var selectedUser = [
    //     {userId: 1, name:"Аззаяа", photo:"https://randomuser.me/api/portraits/thumb/women/9.jpg"}, 
    //     {userId: 2, name:"Угтахбаяр", photo:"https://randomuser.me/api/portraits/thumb/men/72.jpg"},
    //     {usreId: 3, name:"Одбаяр", photo:"https://randomuser.me/api/portraits/thumb/men/71.jpg"}
    //     ]
      
    function handleChange(e: any) {
    
        setState({ ...state, [e.target.name]: e.target.value });
      }

      function userHandleChange(e: any){
        setSelectUser(e.target.value);
        setEmailError("");
      }

function addUser(){

    
    if (validator.isEmail(selectUser)) {
        const unique = selectedUsers.indexOf(selectUser);
        if( unique === -1){
            // setSelectedUsers([...selectedUsers, {email: selectUser, name: null, imageUrl: null}]);
            setSelectedUsers([...selectedUsers,selectUser]);
            setSelectUser("");
            setEmailError("");
        }else{
            setEmailError("Имэйл давхцаж байна");
        }
        
    } else if(!selectUser){
        setEmailError("Имэйл хаяг оруулна уу");
    }else{
        setEmailError("Зөв имэйл хаяг оруулна уу");
    }
    
   
    
}


const removeUserHandler = (item: Object) => {

    var array = [...selectedUsers]; 
    var index = array.indexOf(item)
    if (index !== -1) {
      array.splice(index, 1);
      setSelectedUsers(array);
    }
  };

    return (
        <Layout>
            <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
            <Typography component="h3" variant="h3" style={{margin:"2rem 0 0 5rem", fontSize:"2rem" }}>
            Монта үүсгэх
            </Typography>
            <List style={{marginTop:"2rem", fontSize:"2rem" }}>
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
                        inputProps={{ type: 'name' }}
                        error={Boolean(errors.name)}
                        helperText={
                            errors.name
                            ? errors.name.type === 'minLength'
                                ? 'Нэрийн урт 1 тэмдэгтээс их байна'
                                : 'Заавал нэр оруулна уу'
                            : ''
                        }
                        {...field}
                        ></TextField>
                    )}
                    ></Controller>
                </ListItem>
                <ListItem>
                    
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Controller
                name="endDate"
                control={control}
                defaultValue={new Date()}
                render={({ field: { ref, ...rest } }) => (
                <DesktopDatePicker
                    label="Бэлэг өгөх өдөр"
                    value={endDate}
                    minDate={new Date('2017-01-01')}
                    onChange={(newValue) => {
                        setEndDate(newValue);
                     }}
                    renderInput={(params) => <TextField {...params} />}
        />
        )}
              />
         </LocalizationProvider>
                </ListItem>
                <ListItem>
                    <div className={styles.email_add_section}>
                        <div className={styles.email_field}>
                            <div>
                                <TextField
                                variant="outlined"
                                value={selectUser}
                                onChange={userHandleChange}
                                fullWidth
                                id="email"
                                label="Имэйл хаяг"
                                ></TextField>
                            </div>
                            {emailError && <div className={styles.email_error}>{emailError}</div>}
                        </div>
                        <div>
                        <Button variant="contained" onClick={addUser}  color="secondary" style={{
                                border: "none",
                                margin: "0.2rem 1rem 1rem 1rem",
                                width: "10%",
                                height: "50px",
                                fontSize: "2rem",
                                borderRadius: "15px",
                                
                                }}>
                                +
                            </Button>
                        </div>
                        </div>
                    </ListItem>
       
          <ListItem>
              <List style={{fontSize: "1rem", width:"85%"}}>
                    <div style={{display: "flex", flexDirection:"column"}}>
                        {selectedUsers.map((item, index) => {
                                return  (
                                    <div key={index} className={styles.user_card}>
                                    <UserCard email={item}/>
                                        <Button
                                        variant="contained"
                                        color="secondary"
                                       className={styles.remove_button}
                                        onClick={() => removeUserHandler(item)}
                                        >
                                        x
                                        </Button>
                                    </div>
                                    );
                                })}
                    </div>
          
        </List>
              </ListItem>
          
            <ListItem>
            <Button variant="contained" type="submit" color="secondary" style={{
                  border: "none",
                  width: "100%",
                  height: "50px",
                  borderRadius: "15px",
                }}>
                Үүсгэх
            </Button>
          </ListItem>
          </List>
            </form>
        </Layout>
    );
}

// function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
//     // will resolve posts to type Post[]
//   }

export const getStaticProps = async ()=>{
    // const postData = await createMonitaPost();
    const data = true
        if (!data) {
            return {
            redirect: {
                destination: '/',
                permanent: false,
            },
            }
        }


    return {
      props: {},
    };
}