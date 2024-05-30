// eslint-disable-next-line no-unused-vars
import React from "react";
// importando modulo css//
import styles from "./StartPage.module.css";
// utilizando usenavigate para rota//
import { useNavigate } from "react-router-dom";
// importando img //
import questionMark from "../../assets/questionMark.svg";
// importando componente//
import Footer from "../../components/Footer/Footer";

const StartPage = () => {
  let navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Jogo Adivinhe um número</h1>
      <img
        src={questionMark}
        alt="Bad Person"
        className={styles.thinkingPerson}
      />
      <p className={styles.instructions}>
        Escolha um número de 1 a 100 em até 10 tentativas,
        <br/>informaremos se é alto ou baixo.
      </p>
      <button className={styles.startButton} onClick={() => navigate("/game")}>
        Iniciar
      </button>
      <Footer/>
    </div>
  );
};

export default StartPage;
