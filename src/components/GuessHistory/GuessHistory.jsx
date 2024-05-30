/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./GuessHistory.module.css"; // O caminho pode variar conforme a estrutura do projeto
''
const GuessHistory = ({ guesses }) => {
  return (
    <div className={styles.history}>
      <h2>Palpites anteriores:</h2>
      {guesses.length > 0 ? <p>{guesses.join(" ")}</p> : <p>Sem palpites ainda.</p>}
    </div>
  );
};

export default GuessHistory;
