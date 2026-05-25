import { createContext, useReducer } from "react";

import {
    gameReducer,
    initialState
} from "../reducers/gameReducer";

export const GameContext = createContext({});

export const GameContextProvider = ({ children }) => {

    const [game, dispatch] = useReducer(
        gameReducer,
        initialState
    );

    return (
        <GameContext.Provider value={{ game, dispatch }}>
            {children}
        </GameContext.Provider>
    );
};