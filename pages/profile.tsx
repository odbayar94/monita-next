import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import styles from "../styles/sass/profile.module.scss";
import {
  faCoffee,
  faHeart,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "../components/Avatar";
import { Product } from "../components/Product";

const Profile: NextPage = ({ products }: any) => {
  const [isSelected, setIsSelected] = useState(0);
  const [wishLists, setWishLists] = useState([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  ]);
  const [productList, setProductList] = useState([]);

  const select = (num: number) => {
    setIsSelected(num);
  };

  const addWish = (p: any) => {
    setWishLists([...wishLists, p]);
  };

  const removeProduct = (p: any) => {
    const filtered = productList.filter((prod) => prod !== p);
    setProductList(filtered);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Profile</title>
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.wrapper_cover}></div>
        <div className={styles.wrapper_content}>
          <div className={styles.wrapper_content_avatar}>
            <Avatar url="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2371&q=80" />
          </div>
          <div className={styles.wrapper_content_buttons}>
            <button
              className={
                isSelected === 0 ? styles.isSelected : styles.isNotSelected
              }
              onClick={() => select(0)}
            >
              <FontAwesomeIcon
                icon={faCoffee}
                color={isSelected === 0 ? "#ffffff" : "#E22140"}
              />
            </button>
            <button
              className={
                isSelected === 1 ? styles.isSelected : styles.isNotSelected
              }
              onClick={() => select(1)}
            >
              <FontAwesomeIcon
                icon={faHeart}
                color={isSelected === 1 ? "#ffffff" : "#E22140"}
              />
            </button>
            <button
              className={
                isSelected === 2 ? styles.isSelected : styles.isNotSelected
              }
              onClick={() => select(2)}
            >
              <FontAwesomeIcon
                icon={faClipboard}
                color={isSelected === 2 ? "#ffffff" : "#E22140"}
              />
            </button>
          </div>
          <div className={styles.wrapper_content_info}>
            <div>
              <h4>Номин-Эрдэнэ</h4>
              <h4>Монита</h4>
            </div>
            <div>
              <h4>Btn</h4>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cards}>
        {isSelected === 0 && <div>About</div>}
        {isSelected === 1 && (
          <Product
            title="Wishlist"
            products={wishLists}
            addWish={setWishLists}
            remove={removeProduct}
          />
        )}
        {isSelected === 2 && (
          <Product
            title="Products"
            products={products}
            addWish={addWish}
            remove={removeProduct}
          />
        )}
      </div>
    </div>
  );
};
export default Profile;

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=5");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};
