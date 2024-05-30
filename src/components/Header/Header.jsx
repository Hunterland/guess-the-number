// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Header.module.css"; // O caminho pode variar conforme a estrutura do projeto

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Em qual número está pensando?</h1>
    </header>
  );
};

export default Header;
