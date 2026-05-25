import { checkForWinner } from "../utils/GameUtils";
import Avatar, { genConfig } from 'react-nice-avatar';

export const initialState = {
    board: Array(9).fill(null),

    player1: {
        choice: "x",
        name: "Player 1",
        score: 0,
        avatarConfig: genConfig()
    },

    player2: {
        choice: "o",
        name: "Player 2",
        score: 0,
        avatarConfig: genConfig()
    },

    turn: "x",

    winner: null,

    draw: false,

    history: [],

    highlightedCell: null,
};

export const gameReducer = (state, action) => {

    switch(action.type) {

        case "MAKE_MOVE": {

            const index = action.payload;

            // prevent overwrite
            if(state.board[index] || state.winner || state.draw) {
                return state;
            }

            // copy board safely
            const updatedBoard = [...state.board];

            // save history
            const updatedHistory = [
                ...state.history,
                {
                    board: [...state.board],
                    turn: state.turn,
                    cellIndex: index,
                }
            ];

            updatedBoard[index] = state.turn;

            // check winner
            const result = checkForWinner(updatedBoard);

            // DRAW
            if(result === "draw") {
                return {
                    ...state,
                    board: updatedBoard,
                    draw: true,
                    history: updatedHistory,
                    highlightedCell: null,
                };
            }

            // WINNER
            if(result) {

                const winningPlayer =
                    state.turn === state.player1.choice
                        ? "player1"
                        : "player2";

                return {
                    ...state,

                    board: updatedBoard,

                    winner: state.turn,

                    history: updatedHistory,

                    highlightedCell: null,

                    [winningPlayer]: {
                        ...state[winningPlayer],
                        score: state[winningPlayer].score + 1,
                    },
                };
            }

            // NORMAL TURN
            return {
                ...state,

                board: updatedBoard,

                history: updatedHistory,

                highlightedCell: null,

                turn: state.turn === "x" ? "o" : "x",
            };
        }

        case "UNDO_MOVE": {

            // no moves to undo
            if(state.history.length === 0) {
                return state;
            }

            const previousMove =
                state.history[state.history.length - 1];

            const updatedHistory =
                state.history.slice(0, -1);

            return {
                ...state,

                board: previousMove.board,

                turn: previousMove.turn,

                history: updatedHistory,

                highlightedCell: null,

                winner: null,

                draw: false,
            };
        }

        case "TIME_TRAVEL": {
            const targetIndex = action.payload;

            if (targetIndex < 0 || targetIndex >= state.history.length) {
                return state;
            }

            const targetMove = state.history[targetIndex];

            // Build the board AFTER this move was played
            const boardAfterMove = [...targetMove.board];
            boardAfterMove[targetMove.cellIndex] = targetMove.turn;

            // Keep history up to and including the selected move
            const keptHistory = state.history.slice(0, targetIndex + 1);

            // Next turn after this move
            const nextTurn = targetMove.turn === "x" ? "o" : "x";

            return {
                ...state,
                board: boardAfterMove,
                turn: nextTurn,
                history: keptHistory,
                highlightedCell: targetMove.cellIndex,
                winner: null,
                draw: false,
            };
        }

        case "CLEAR_HIGHLIGHT": {
            return {
                ...state,
                highlightedCell: null,
            };
        }

        case "RESET_BOARD":

            return {
                ...state,

                board: Array(9).fill(null),

                turn: "x",

                winner: null,

                draw: false,

                history: [],

                highlightedCell: null,
            };

        case "RESET_GAME":

            return initialState;

        default:
            return state;
    }
};