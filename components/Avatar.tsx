import styles from "./style.module.scss";

interface IAvatar {
  url?: string;
}

const Avatar = ({ url }: IAvatar) => {
  return (
    <div className={styles.Avatar}>
      <img src={url} alt="" />
    </div>
  );
};

export default Avatar;
