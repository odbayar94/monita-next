import { useState } from "react";
import styles from "./style.module.scss";
import { faPlusCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProduct {
  title: string;
  products: [];
  addWish: Function;
  remove: Function;
}

export const Product = ({ title, products, addWish, remove }: IProduct) => {
  return (
    <div className={styles.cards_container}>
      <h3>{title}</h3>
      {products?.map((product, i) => (
        <Content
          key={i}
          title={title}
          product={product}
          addWish={addWish}
          remove={remove}
        />
      ))}
    </div>
  );
};

const Content = ({ title, product, addWish, remove }: any) => {
  const add = () => {
    console.log("C:", product);
    addWish(product);
    remove(product);
  };
  return (
    <div className={styles.cards_container_content}>
      <img src={product.image} />
      <div className={styles.cards_container_content_info}>
        <div className={styles.cards_container_content_info_title}>
          <h4>{product.title}</h4>
          <p>$ {product.price}</p>
        </div>
        <div className={styles.cards_container_content_info_icons}>
          <button onClick={add}>
            <FontAwesomeIcon
              icon={title === "Wishlist" ? faTimesCircle : faPlusCircle}
              size="2x"
              color={"#E22140"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
