// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import styles from "./ResultMessage.module.css";
import downGuessImage from "../../assets/DownGuess.svg";
import upGuessImage from "../../assets/UpGuess.svg";
import Header from "../Header/Header"
import Handle from "../../assets/handleType.svg";

const ResultMessage = ({ guesses, randomNumber }) => {
  const lastGuess = guesses[guesses.length - 1];

  if (lastGuess === randomNumber) {
    return (
      <div className={styles.successMessage}>
        <p>Parabéns! Você acertou!</p>
      </div>
    );
  } else if (lastGuess < randomNumber) {
    return (
      <div className={styles.lowGuessMessage}>
        <h1>Seu palpite está muito baixo!</h1>
        <img src={downGuessImage} alt='Palpite muito baixo' className={styles.image} />
      </div>
    );
  } else if (lastGuess > randomNumber) {
    return (
      <div className={styles.highGuessMessage}>
        <h1>Seu palpite está muito alto!</h1>
        <img src={upGuessImage} alt='Palpite muito alto' className={styles.image} />
      </div>
    );
  }

  // Return padrão, apenas com cabeçalho e imagem, sem mensagem específica
  return (
    <div className={styles.defaultMessage}>
      <Header /> {/* Ajuste conforme necessário */}
       <img src={Handle} alt="Pessoa Digitando"/>
    </div>
  );

};

ResultMessage.propTypes = {
  guesses: PropTypes.arrayOf(PropTypes.number).isRequired,
  randomNumber: PropTypes.number.isRequired,
};

export default ResultMessage;
