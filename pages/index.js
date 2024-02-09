// pages/choose-size.js
import { useState, useEffect } from "react";
import Link from "next/link";
import Modal from "./components/HistoryModal";
import { db } from "../public/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Home() {
  const [size, setSize] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gameHistory, setGameHistory] = useState([]);

  const fetchGameHistory = async () => {
    const querySnapshot = await getDocs(collection(db, "history"));
    const history = [];
    querySnapshot.forEach((doc) => {
      history.push(doc.data());
    });
    setGameHistory(history);
  };

  useEffect(() => {
    fetchGameHistory();
  }, []);

  return (
    <div>
      <div className="title">
        <img src="./images/title.png"/>
        <a>-Select Your Board Size-</a>
      </div>
      
      <div className="game-mode">
        <Link href={`/game/9`}>
            <button>
              <img src="./images/9.png"/>
            </button>
        </Link>
        <Link href={`/game/16`}>
            <button>
              <img src="./images/16.png"/>
            </button>
        </Link>
        <Link href={`/game/25`}>
            <button>
              <img src="./images/25.png"/>
            </button>
        </Link>
      </div>
        <button className = "replay-button" onClick={() => setIsModalOpen(true)}> 
          <img
            src="./images/replay.png"
          />
        </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        gameHistory={gameHistory}
      />
    </div>
  );
}
