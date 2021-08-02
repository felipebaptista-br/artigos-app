import React, { useContext, useState, createContext } from "react";

const GlobalStateContext = createContext({});

export default function GlobalStateProvider({ children }) {
    const [items, setItems] = useState([]);

    return (
        <GlobalStateContext.Provider
            value={{
                items,
                setItems,
            }}
        >
            {children}
        </GlobalStateContext.Provider>
    );
}

export function useGlobalState() {
    const context = useContext(GlobalStateContext);

    if (!context) {
        throw new Error(
            "useGlobalState must be used within an GlobalStateProvider"
        );
    }

    return context;
}