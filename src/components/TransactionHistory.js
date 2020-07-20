import React, { useContext } from 'react';
import { GlobalContxt} from '../context/GlobalState';

//Import transaction

import { Transaction } from './Transaction'

export const TransactionHistory=()=>{
    
    const { transactions }=useContext(GlobalContxt);
        
    return(
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction}/>
                ))}
                <li className="minus">
                    Project 1 Salaries
                    <span>-$500</span>
                    <button className="delete-btn">X</button>
                </li>
            </ul>
        </div>
    )
} 

export default TransactionHistory;