import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Dropdown from 'react-dropdown';
import styles from "../styles/sass/createMonitaPage.module.scss";
import validator from 'validator';

//import CSS
import 'react-dropdown/style.css';
import "react-datepicker/dist/react-datepicker.css";


//Import my components
import {createMonitaPost} from '../lib/api';


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

const DateComponent = () => {
    const [endDate, setEndDate] = useState(new Date());
    return (
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
    );
};

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
    const [selectedUsers, setSelectedUsers] = useState<Array<any>>([]);
    const [endDate, setEndDate] = useState(new Date());
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
      }

      async function createMonita(){
          
          if(state.name && endDate ){
            const data = {...state,  endDate, selectedUsers}
            
            const message = await createMonitaPost(data);
            setInfoMessage(message);
          }else{
            setInfoMessage("Талбарыг бүрэн бөглөнө үү");
          }
        
       
        alert(infoMessage);
      }
function addUser(){
    
    if (validator.isEmail(selectUser)) {
        setSelectedUsers([...selectedUsers, {email: selectUser, name: null, imageUrl: null}]);
        setSelectUser("");
    } 
    
    else{
        alert("Имэйл хаяг оруулна уу");
    }
    
}
      const monitaPhases = (number: string) => {
        // select option-с орж ирж байга утга стринг тул энэ хэсэг 
        // заавал string to number хувиргалт хийнэ.
        const num = Number(number);

        // content гэсэн array todor huv niit songoson element ee oruulj ogno
        let content = [];
        for (let i = 1; i <= num; i++) {
            //songoson toogoor davtalt hiij array push hiine
            content.push(<div key={i} className={styles.phase__input_info}>
                            <div className={styles.phase__input_info__field}>
                                <p>Нэр:</p> 
                                <input
                                    name="phase-title"
                                    type="text"
                                    placeholder="Сэдвийн нэр..."
                                    value=""
                                    required
                                />
                            </div>
                            <div>
                                <DateComponent/>
                            </div>
                        </div>)
                }

            return content;
    }

      function onSelect(eventKey: any, event: Object) {
          setState({ ...state, phase: eventKey.value });
      }

    return (
        <div className={styles.create_monita}>
            <Header/>
        <div className={styles.create_monita__general}>
            <div className={styles.create_monita__name}>
                <div className={styles.create_monita__name__title}>Нэр</div>
                    <div className={styles.create_monita__name__input}>
                        <input
                            name="name"
                            type="text"
                            placeholder="Монита нэр оруулна уу..."
                            onChange={handleChange}
                            value={state.name}
                            required
                        />
                    </div>
            
            </div>
            <div className={styles.create_monita__date}>
                <div className={styles.create_monita__date_title}>Монита задрах өдөр</div>
                <div><DatePicker selected={endDate} onChange={(date) => setEndDate(date)} /></div>
            </div>
        </div>
            {/* <hr className={styles.create-monita__line"/> */}
        <div className={styles.create_monita__date}>
   
        </div>
        {/* <div className={styles.phase}>
        <div className={styles.phase__name}>
        <p>Хэдэн үе шаттай монта зохиох вэ?</p>
        </div>
        <Dropdown options={options} onChange={onSelect} value={defaultOption} placeholder="Select an option" />
        </div> */}
        <div className={styles.phase__entered}>
       {
           //React component for ashiglaj bolohgui bsan tul ene function ashiglaj davtal ashiglav @h
       }
        {/* <ol>{monitaPhases(phase)}</ol> */}

        </div>
        <div className={styles.user_section}>
            <div className={styles.user_section__input_field}>
            <input
                            name="name"
                            type="text"
                            placeholder="Монитад оролцох хүний имэйл хаягийг оруулна уу"
                            onChange={userHandleChange}
                            value={selectUser}
                            required
                        />
               <button onClick={addUser}>Нэмэх</button>
            </div>
            <div className={styles.user_section__users}>
                
                    {
                        selectedUsers.map((element, index) => <SelectedUser key={index} email={element.email}/>)
                    }
            </div>
        </div>
        <div >
            <button onClick={createMonita}> Үүсгэх</button>
        </div>
        </div>
        
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