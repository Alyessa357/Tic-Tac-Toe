import React, { useContext } from 'react'
import { Container } from '../../styles/General.styled';
import { GameBoardStyle } from './Game.styled';
import GameCell from '../../components/GameCell/GameCell';
import { GameContext } from '../../contexts/GameContext';
import Player from '../../components/Player/Player';
import { GameWrapper, ButtonBox } from './Game.styled';
import { Subtitle } from '../../styles/General.styled';
import Button from '../../components/Button/Button';
import MoveHistory from '../../MoveHistory/MoveHistory';

function Game() {
  const { game, dispatch } = useContext(GameContext)

  return (
    <GameWrapper>

      {
          game.winner ? (
              <Subtitle>
                  Winner: {game.winner.toUpperCase()}
              </Subtitle>
          ) : game.draw ? (
              <Subtitle>
                  Draw!
              </Subtitle>
          ) : (
              <Subtitle>
                  Next Player: {game.turn.toUpperCase()}
              </Subtitle>
          )
      }

      <ButtonBox>
        {/* UNDO MOVE - MANUAL FEATURE */}
        <Button onClick={() => dispatch({ type: "UNDO_MOVE" })}>
          Undo Move
        </Button>

        {/* MOVE HISTORY + TIME TRAVEL - AI FEATURE*/}
        <MoveHistory />
      </ButtonBox>

      <Container>
        <Player player={game.player1} isPlayerActive={game.player1.choice === game.turn} />
        <GameBoardStyle>
          {game.board.map((item, index) => (
              <GameCell key={index} cellItem={item} index={index} />
            ))}
        </GameBoardStyle>
        <Player player={game.player2} isPlayerActive={game.player2.choice === game.turn} />
      </Container>
    </GameWrapper>
  )
}

export default Game;