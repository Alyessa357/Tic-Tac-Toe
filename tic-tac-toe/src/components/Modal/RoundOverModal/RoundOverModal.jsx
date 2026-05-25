import React, { useContext } from 'react'
import { Title, Subtitle } from '../../../styles/General.styled';
import { ModalHeader, ModalBody, ModalFooter } from '../Modal.styled';
import Button from '../../Button/Button';
import { GameContext } from '../../../contexts/GameContext';
import { ModalContext } from '../../../contexts/ModalContext';

function RoundOverModal() {
  const { dispatch, game } = useContext(GameContext);
  const {handleModal} = useContext(ModalContext);

  return (
    <>
      <ModalHeader>
        <Title primary>{ game.winner ? `Winner: ${game.winner.toUpperCase()}` : "Draw!"}</Title>
      </ModalHeader>

      <ModalBody>
        {/* <Subtitle primary>Choices will be switched now</Subtitle> */}
        <Subtitle primary>{game.player1.name}: {game.player1.score}</Subtitle>
        <Subtitle primary>{game.player2.name}: {game.player2.score}</Subtitle>
      </ModalBody>

      <ModalFooter>
        <Button color="#f9c811" onClick={() => { dispatch({ type: "RESET_BOARD", }); handleModal(); }}>
          Reset Board
        </Button>

        <Button color="#8437f9" onClick={() => { dispatch({ type: "RESET_GAME", }); handleModal(); }}>
          Restart
        </Button>
      </ModalFooter>
    </>
  );
}

export default RoundOverModal;