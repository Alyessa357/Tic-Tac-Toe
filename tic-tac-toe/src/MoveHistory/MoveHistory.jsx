import React, { useState, useEffect, useRef, useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import {
    MoveHistoryWrapper,
    SlotWindow,
    SlotItem,
    HistoryDropdown,
    HistoryItem,
} from './MoveHistory.styled';

function MoveHistory() {
    const { game, dispatch } = useContext(GameContext);
    const [displayText, setDisplayText] = useState("Move History");
    const [direction, setDirection] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [animKey, setAnimKey] = useState(0);
    const prevLengthRef = useRef(game.history.length);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const currentLength = game.history.length;
        const prevLength = prevLengthRef.current;

        if (currentLength > prevLength) {
            const lastMove = game.history[currentLength - 1];
            setDisplayText(`Move ${currentLength}: ${lastMove.turn.toUpperCase()}`);
            setDirection("up");
            setAnimKey((k) => k + 1);
        } else if (currentLength < prevLength) {
            if (currentLength === 0) {
                setDisplayText("Move History");
            } else {
                const lastMove = game.history[currentLength - 1];
                setDisplayText(`Move ${currentLength}: ${lastMove.turn.toUpperCase()}`);
            }
            setDirection("down");
            setAnimKey((k) => k + 1);
        } else if (currentLength === 0) {
            setDisplayText("Move History");
            setDirection(null);
        }

        prevLengthRef.current = currentLength;
    }, [game.history]);

    useEffect(() => {
        function handleClickOutside(e) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setShowDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleToggleDropdown = () => {
        if (game.history.length > 0) {
            setShowDropdown((prev) => !prev);
        }
    };

    const handleTimeTravel = (index) => {
        dispatch({ type: "TIME_TRAVEL", payload: index });
        setShowDropdown(false);
    };

    return (
        <MoveHistoryWrapper ref={wrapperRef} onClick={handleToggleDropdown}>
            <SlotWindow>
                <SlotItem key={animKey} $direction={direction}>
                    {displayText}
                </SlotItem>
            </SlotWindow>

            {showDropdown && game.history.length > 0 && (
                <HistoryDropdown>
                    {game.history.map((move, index) => (
                        <HistoryItem
                            key={index}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleTimeTravel(index);
                            }}
                        >
                            Move {index + 1}: {move.turn.toUpperCase()} — Cell {move.cellIndex + 1}
                        </HistoryItem>
                    ))}
                </HistoryDropdown>
            )}
        </MoveHistoryWrapper>
    );
}

export default MoveHistory;
