import { useState } from "react";

import BookItem from "./BookItem";

import styles from "./BookList.module.css";

function BookList({ favoriteList, setFavoriteList, books }) {
  return (
    <div
      className={styles.bookList}
      style={{ width: !favoriteList.length && "100%" }}
    >
      <ul>
        {books.map(book => (
          <BookItem
            key={book.id}
            data={book}
            setFavoriteList={setFavoriteList}
            favoriteList={favoriteList}
          />
        ))}
      </ul>
    </div>
  );
}

export default BookList;
