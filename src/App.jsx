// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./components/Game/Game";
import FailPage from "./pages/FailPage/FailPage";
import StartPage from "./pages/StartPage/StartPage";
import SuccessPage from "./pages/SuccessPage/SucessPage";
import "./App.css"; // Ou './App.css', dependendo de onde estão seus estilos globais

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/game" element={<Game />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/fail" element={<FailPage />} />
        </Routes>
    </Router>
  );
}

export default App;
