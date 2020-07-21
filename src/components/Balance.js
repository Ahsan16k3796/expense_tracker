import React, { useContext } from 'react';
import { GlobalContxt} from '../context/GlobalState';

export const Balance=()=>{

    const { transactions }=useContext(GlobalContxt);
    
    const amounts=transactions.map(transaction => transaction.transactionAmount);
    const total=amounts.reduce((acc,item) => (acc += item),0).toFixed(2); 

    return(
        <div>
            <h4>
                Current Balance
            </h4>
            <h1>
                ${total}
            </h1>
        </div>
    )
}

export default Balance;