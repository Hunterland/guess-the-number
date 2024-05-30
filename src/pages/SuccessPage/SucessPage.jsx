/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Adicionado useLocation
import styles from "./SuccessPage.module.css";
import yesImage from "../../assets/Success.svg"; // Ajuste o caminho se necessário
import Footer from "../../components/Footer/Footer"
import GuessHistory from "../../components/GuessHistory/GuessHistory";

const SuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Renomeie o estado da localização para evitar conflitos
  const guesses = location.state?.guesses || []; // Use a variável location e obtenha guesses do estado

  const handleRestart = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className={styles.successContainer}>
      <h1 className={styles.congratulationsMessage}>
        Parabéns! Você acertou!!!
      </h1>
      <img
        src={yesImage}
        alt="Imagem de Sucesso"
        className={styles.SuccessImage}
      />
      <GuessHistory guesses={guesses} />
      <button className={styles.restartButton} onClick={handleRestart}>
        Reiniciar
      </button>
      <Footer/>
    </div>
  );
};

export default SuccessPage;
