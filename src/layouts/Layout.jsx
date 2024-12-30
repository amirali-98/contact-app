import Library from "../templates/Library";

import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Contact App</h1>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Amirali with ❤️</p>
      </footer>
    </>
  );
}

export default Layout;
