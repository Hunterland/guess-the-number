// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GuessHistory from "../GuessHistory/GuessHistory";
import ResultMessage from "../ResultMessage/ResultMessage";
import AlertMessage from "../../components/AlertMessage/AlertMessage";
import styles from "./Game.module.css";

// Declarando componente funcional 'game'
const Game = () => {
  // Armazena o palpite atual do usuário.
  const [guess, setGuess] = useState("");

  // Lista de palpites feitas pelo usuário.
  const [guesses, setGuesses] = useState([]);

  // Número aleatório que o usuário deve adivinhar.
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );

  // Conta as tentativas feitas pelo usuário.
  const [attempt, setAttempt] = useState(0);

  // Hook para navegação entre páginas.
  const navigate = useNavigate();

  // Alerta para mensagens de validação.
  const [alert, setAlert] = useState("");

  const [isGuessing, setIsGuessing] = useState(false);
   
  // o Hook 'useEffect' é executado sempre que 'attemp',
  // 'guesses' ou 'navigate' mudam.
  useEffect(() => {
    // Se o número de tentativas atingir ou exceder 10, o usuário 
    // é redicerionado para página de falha, passando os palpites feitos como estado
    if (attempt >= 10) {
      navigate("/fail", { state: { guesses } });
    }
  }, [attempt, guesses, navigate]);
  
  // Função 'handleGuess'.
  const handleGuess = () => {
    const num = Number(guess);

    // verifica se o número é válido.
    if (isNaN(num) || guess.trim() === "") {
      setAlert("É permitido apenas números.");
      return;
    }
    // verifica se o palpite já foi feito antes.
    if (guesses.includes(num)) {
      setAlert("Você já tentou esse número. Tente um número diferente.");
      return;
    }
    // verifica se o número está dentro do intervalo permitido.
    if (num < 0 || num > 100) {
      setAlert("Insira um número entre 0 e 100.");
      return;
    }
    // Se o palpite é correto, redireciona para '/success'.
    if (num === randomNumber) {
      navigate("/success", { state: { guesses: [...guesses, num] } });
    // se o palpite é incorreto, é acionado a lista de palpites e o
    // contador de tentativas é incrementado.
    } else {
      setGuesses((prevGuesses) => [...prevGuesses, num]);
      setAttempt((prevAttempt) => prevAttempt + 1);
    }
    // campo de entrada é redefinido para vazio.
    setGuess("");
  };
  
  // Função 'reseteGame'

  // Redefine o número aleatório,
  // contador de tentativas, lista de palpites e mensagem de alerta.
  const resetGame = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setAttempt(0);
    setGuesses([]);
    setAlert("");
  };
  
  // Renderização do componente.
  return (
    <div className={styles.game}>
      <ResultMessage guesses={guesses} randomNumber={randomNumber} />
      {guesses.length === 0 && !isGuessing ? (
        <h2>Digite seu palpite abaixo:</h2>
      ) : (
        <GuessHistory guesses={guesses} />
      )}
      <div className={styles.TypeInput}>
        <input
          className={styles.input}
          type="number"
          value={guess}
          onChange={(e) => {
            setGuess(e.target.value);
            setIsGuessing(true);
          }}
          min="0"
          max="100"
        />
        <button className={styles.btnSub} onClick={handleGuess}>
          Enviar Palpite
        </button>
        {attempt >= 10 && <button onClick={resetGame}>Reiniciar Jogo</button>}
      </div>
      {alert && <AlertMessage message={alert} onClose={() => setAlert("")} />}
    </div>
  );
};

export default Game;
