import React from 'react'
import { PlayerWrapper, AvatarWrapper } from './Player.styled';
import { Subtitle } from '../../styles/General.styled';
import Avatar, { genConfig } from 'react-nice-avatar'

function Player({ player, isPlayerActive }) {
  return (
    <PlayerWrapper>

      <AvatarWrapper isPlayerActive={isPlayerActive ?? false}>
        <Avatar {...player.avatarConfig} />
      </AvatarWrapper>
      
      <Subtitle>
          {player.name} ({player.choice.toUpperCase()})
      </Subtitle>

      <Subtitle>{player.score}</Subtitle>

    </PlayerWrapper>
  )
}

export default Player;



