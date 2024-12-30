import { useState } from "react";
import { FaHeart } from "react-icons/fa";

import { checkFavoriteItem } from "../helper/helper";

import styles from "./BookItem.module.css";

function BookItem({ data, setFavoriteList, favoriteList }) {
  const { id, image, title, author, language, pages } = data;
  const [isFavorite, setIsFavorite] = useState(
    checkFavoriteItem(favoriteList, id)
  );
  function addFavoriteHandler() {
    setIsFavorite(isFavorite => !isFavorite);
    if (isFavorite) {
      setFavoriteList(favoriteList => favoriteList.filter(f => f.id !== id));
    } else {
      setFavoriteList(favoriteList => [...favoriteList, data]);
    }
  }
  return (
    <li className={styles.bookItem}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p>{author}</p>
        <div className={styles.moreInfo}>
          <span>{language}</span>
          <span>{pages} pages</span>
        </div>
      </div>
      <button
        className={`${styles.favoriteBtn} ${isFavorite && styles.favorite}`}
        onClick={addFavoriteHandler}
      >
        <FaHeart />
      </button>
    </li>
  );
}

export default BookItem;
