import React, {useContext} from 'react';
import { GlobalContxt} from '../context/GlobalState';

export const AccountSummary=()=>{

    const { transactions }=useContext(GlobalContxt);
    
    const amounts = transactions.map(transaction => transaction.transactionAmount);

    const income=amounts
      .filter(item => item>0)
      .reduce((acc,item) => (acc += item),0)
      .toFixed(2);

    const expense=amounts
        .filter(item => item<0)
        .reduce((acc,item)=>(acc+=item),0)
        .toFixed(2);  


    
    return(
        <div className="inc-exp-container">
            <div className="" >
                <h4>
                    Income
                </h4>
                <p className="money plus">${income}</p>
            </div>
            <div>
                <h4>
                    Expense
                </h4>
                <p className="money minus">${ Math.abs(expense)}</p>
            </div>
        </div>
    )
}

export default AccountSummary;