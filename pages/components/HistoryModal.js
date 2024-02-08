import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#__next");

const formatDate = (firebaseTimestamp) => {
  if (!firebaseTimestamp) return '';
  const date = new Date(firebaseTimestamp.seconds * 1000);
  return date.toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
};

const getBoardSize = (value) => {
  const boardSizes = {
    9: '3x3',
    16: '4x4',
    25: '5x5',
  };

  return boardSizes[value] || 'Unknown Size';
};

const HistoryModal = ({ isOpen, onRequestClose, gameHistory }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Game Replay"
    >
      <h2>Game Replay</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto', gap: '10px', alignItems: 'center', justifyItems: 'center', padding: '10px' }}>
        <div style={{ padding: '5px', fontWeight: 'bold' }}>#Match</div>
        <div style={{ padding: '5px', fontWeight: 'bold' }}>Winner</div>
        <div style={{ padding: '5px', fontWeight: 'bold' }}>Board Size</div>
        <div style={{ padding: '5px', fontWeight: 'bold' }}>Time</div>
        {gameHistory
          .sort((a, b) => b.timeStamp.toMillis() - a.timeStamp.toMillis())
          .map((game, index) => (
            <>
              <div style={{ padding: '5px' }}>{'#' + (gameHistory.length - index)}</div>
              <div style={{ padding: '5px'}}>{game.isDraw ? 'Draw' : `${game.winner}`}</div>
              <div style={{ padding: '5px' }}>{getBoardSize(game.boardSize)}</div>
              <div style={{ padding: '5px' }}>{formatDate(game.timeStamp)}</div>
            </>
        ))}
      </div>
    </Modal>
  );
};

export default HistoryModal;

