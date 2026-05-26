import { createContext, useReducer } from "react";

import {
    gameReducer,
    initialState
} from "../reducers/gameReducer";

export const GameContext = createContext({});

export const GameContextProvider = ({ children }) => {

    // This allows components to access and update state without prop drilling.
    // Game - current global state
    // dispatch - function used to trigger actions
    const [game, dispatch] = useReducer(
        gameReducer,
        initialState
    );

    return (
        // This makes the game state available globally to all components
        <GameContext.Provider value={{ game, dispatch }}>
            {children}
        </GameContext.Provider>
    );
};