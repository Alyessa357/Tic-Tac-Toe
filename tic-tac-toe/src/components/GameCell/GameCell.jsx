import React, { useContext, useEffect } from 'react';
import { CellStyle } from './GameCell.styled';
import { GameContext } from '../../contexts/GameContext';
import { ModalContext } from '../../contexts/ModalContext';
import RoundOverModal from '../Modal/RoundOverModal/RoundOverModal';


function GameCell({ cellItem, index }) {
  const { dispatch, game } = useContext(GameContext);
  const { handleModal, modal } = useContext(ModalContext);

  const isHighlighted = game.highlightedCell === index;

  const cellClickHandler = () => {
    dispatch({
      type: "MAKE_MOVE",
      payload: index,
    });
  };

  
  useEffect(() => {
    if (isHighlighted) {
      const timer = setTimeout(() => {
        dispatch({ type: "CLEAR_HIGHLIGHT" });
      }, 2000);
      return () => clearTimeout(timer);
      }
    }, [isHighlighted, dispatch]);

  useEffect(() => {
    if ((game.winner || game.draw) && !modal) {
      handleModal(<RoundOverModal />);
    }
  }, [game.winner, game.draw]);


  if (cellItem === "x") {
    return (
      <CellStyle $highlighted={isHighlighted} $available={false}>
      {/* <CellStyle $highlighted={isHighlighted}> */}
        <svg className='game-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path d="M6.22 8L1.10889 0H4.66889L8 5.21391L11.3311 0H14.8911L9.78 8L14.8911 16H11.3311L8 10.7861L4.66889 16H1.10889L6.22 8Z" fill="currentColor"/>
        </svg>
      </CellStyle>
    );
  }

  if (cellItem === "o") {
    return (
      <CellStyle $highlighted={isHighlighted} $available={false}>
        <svg className='game-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path fillRule="evenodd" clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13Z" fill="currentColor"/>
        </svg>
      </CellStyle>
    );
  }

  return (
    <CellStyle $highlighted={isHighlighted} $available={true} onClick={cellClickHandler}>
      {cellItem}
    </CellStyle>
  );
}

export default GameCell;