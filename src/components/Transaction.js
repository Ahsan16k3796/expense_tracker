import React, { useContext } from 'react';
import { GlobalContxt} from '../context/GlobalState';


export const Transaction = ({transaction}) =>{
    
    const sign=transaction.transactionAmount < 0 ? '-' : '+';
    const amount=transaction.transactionAmount < 0 ? 'minus' : 'plus';

    const { deleteTransaction }=useContext(GlobalContxt);
    // console.log(deleteTransaction);



    return(
        <li className={amount}>
            {transaction.description}
            <span>{sign}${Math.abs(transaction.transactionAmount)}</span>
            <button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>X</button>
        </li>
    )
}