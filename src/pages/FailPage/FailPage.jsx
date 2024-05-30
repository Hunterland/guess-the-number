// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./FailPage.module.css";
import GuessHistory from "../../components/GuessHistory/GuessHistory";
import Footer from "../../components/Footer/Footer";
import PersonBad from "../../assets/Bad.svg";

const FailPage = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Renomeie o estado da localização para evitar conflitos
  const guesses = location.state?.guesses || []; // Use a variável location e obtenha guesses do estado

  const handleRestart = () => {
    navigate("/game");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.Badtitle}>Errou todas as tentativas!</h1>
      <img src={PersonBad} alt="Bad Person" className={styles.personBad} />
      <GuessHistory guesses={guesses} />
      <button onClick={handleRestart} className={styles.restartButton}>
        Reiniciar
      </button>
      <Footer />
    </div>
  );
};

export default FailPage;
