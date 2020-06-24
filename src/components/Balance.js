import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlovalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transactions => transactions.amount);
    const total = amounts.reduce((accumulator, currentValue) => (accumulator + currentValue), 0).toFixed(2);
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
};