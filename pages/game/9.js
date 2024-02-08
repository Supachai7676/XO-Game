import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const WINNING_COMBO = [
  // Horizontal Lines
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Vertical Lines
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonal Lines
  [0, 4, 8],
  [2, 4, 6],
];

const initialState = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
};

export default function Game() {
  const [xTurn, setXTurn] = useState(true);
  const [won, setWon] = useState(false);
  const [wonCombo, setWonCombo] = useState([]);
  const [boardData, setBoardData] = useState(initialState);
  const [isDraw, setIsDraw] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [playerTurn, setPlayerTurn] = useState("x-turn");

  useEffect(() => {
    checkWinner();
  }, [boardData]);
  
  useEffect(() => {
    if (won || isDraw) { 
      storeData();
    }
  }, [won, isDraw]);

  useEffect(() => {
    setPlayerTurn(xTurn ? "x-turn" : "o-turn");
  }, [xTurn]);

  const storeData = async () => {
    const winnerValue = isDraw ? "" : (!xTurn ? "X" : "O");
    const docRef = await addDoc(collection(db, "history"), {
      boardData,
      winner: winnerValue,
      isDraw,
      boardSize: Object.keys(boardData).length,
      timeStamp: serverTimestamp(),
    });
  };

  const updateBoardData = (idx) => {
    if (!boardData[idx] && !won) {
      const value = xTurn === true ? "X" : "O";
      setBoardData({ ...boardData, [idx]: value });
      setXTurn(!xTurn);
    }
  };

  const checkDraw = () => {
    const isBoardFull = Object.keys(boardData).every((key) => boardData[key]);
    if (isBoardFull && !won) {
      setIsDraw(true);
      setModalTitle("Match Draw!");
    }
  };

  const checkWinner = () => {
    let foundWinner = false;  
    WINNING_COMBO.map((bd) => {
      const [a, b, c] = bd;
      if (
        boardData[a] &&
        boardData[a] === boardData[b] &&
        boardData[a] === boardData[c]
      ) {
        setWon(true);
        setWonCombo([a, b, c]);
        setModalTitle(`Player ${!xTurn ? "X" : "O"} Won!`);
        foundWinner = true;
      }
    });
    if (!foundWinner) {
      checkDraw();
    }
  };

  const reset = () => {
    setBoardData(initialState);
    setXTurn(true);
    setWon(false);
    setWonCombo([]);
    setIsDraw(false);
    setModalTitle("");
  };

  return (
    <div>
      <Head>
        <title>XOXO3x3</title>
      </Head>
      <div className="small-title">
        <img src="../images/title.png"/>
      </div>
      <div className="game">
        <div className={`game-menu ${playerTurn}`}>
          <p>{xTurn === true ? "X Turn" : "O Turn"}</p>
        </div>
        <div className="game-board-3">
          {[...Array(9)].map((v, idx) => (
            <div
              onClick={() => updateBoardData(idx)}
              key={idx}
              className={`square ${wonCombo.includes(idx) ? "highlight" : ""}`}
            >
              {boardData[idx]}
            </div>
          ))}
        </div>
      </div>
      <div className={`modal ${modalTitle ? "show" : ""}`}>
        <div className="modal-title">{modalTitle}</div>
        <button className="reset-button" onClick={reset}>
          <img src="../images/reset.png"/>
        </button>
      </div>
      <div className = "home-button">
        <Link className = "home-button" href={`/`}> 
          <img src="../images/home.png"/>
        </Link>
      </div>
    </div>
  );
};

