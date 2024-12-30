import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import styles from "./SearchForm.module.css";

function SearchForm({ setBooks, booksData }) {
  const [searchText, setSearchText] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    if (searchText) {
      const searchedBooks = booksData.filter(book =>
        book.title
          .toLowerCase()
          .trim()
          .includes(searchText.toLowerCase().trim())
      );
      setBooks(searchedBooks);
    } else {
      setBooks(booksData);
    }
  }

  return (
    <form className={styles.searchForm} onClick={submitHandler}>
      <input
        type="text"
        placeholder="Search By Title"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <button>
        <FaSearch />
      </button>
    </form>
  );
}

export default SearchForm;
