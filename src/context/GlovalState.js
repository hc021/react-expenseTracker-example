import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
//initial state
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 3000 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 },
    ]
}


//createContext 

export const GlobalContext = createContext(initialState);
//Provide component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //action
    function deleteTransaction(id) {
        dispatch({
            type: "Delete_transaction",
            payload: id
        });
    }
    return (<GlobalContext.Provider value={{ transactions: state.transactions }}>
        {children}
    </GlobalContext.Provider>);
}