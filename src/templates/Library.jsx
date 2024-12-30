import { useState } from "react";

import BookList from "../components/BookList";
import FavoriteList from "../components/FavoriteList";
import SearchForm from "../components/SearchForm";

import { books as booksData } from "../constants/mockData";

import styles from "./Library.module.css";

function Library() {
  const [favoriteList, setFavoriteList] = useState([]);
  const [books, setBooks] = useState(booksData);
  return (
    <>
      <SearchForm setBooks={setBooks} booksData={booksData} />
      <div className={styles.container}>
        <BookList
          books={books}
          favoriteList={favoriteList}
          setFavoriteList={setFavoriteList}
        />
        {!!favoriteList.length && <FavoriteList favoriteList={favoriteList} />}
      </div>
    </>
  );
}

export default Library;
