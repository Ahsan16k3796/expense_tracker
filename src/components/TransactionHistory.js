import React, { useContext } from 'react';
import { GlobalContxt} from '../context/GlobalState';

//Import transaction

import { Transaction } from './Transaction'

export const TransactionHistory=()=>{
    
    const { transactions }=useContext(GlobalContxt);

    // console.log(transactions);
        
    return(
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction}/>
                ))}
            </ul>
        </div>
    )
} 

export default TransactionHistory;