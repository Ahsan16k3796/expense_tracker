import React, { useState , useContext } from 'react';
import { GlobalContxt} from '../context/GlobalState';


export const AddTransaction=()=>{
    
    const [description,setDescription]=useState(); //creating the state  for description   
    const [transactionAmount,setTransactionAmount]=useState(); //creating useState for set transaction and transaction amount 
    
    const { AddTransaction }= useContext( GlobalContxt );

    const onSubmit=e =>{
        e.preventDefault();

        const newTransaction={
            id: Math.floor(Math.random()*10000000),
            description,
            transactionAmount : +transactionAmount 
        };

        AddTransaction(newTransaction);
    }

    return(
        <div>
            <h3> Add New Transaction </h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text" id="description" placeholder="Details of Transaction" value={description} 
                    onChange={(e)=>setDescription(e.target.value)}>
                    </input>
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input type="number" id="transactionamount" placeholder="Enter Transaction Amount" value={transactionAmount}
                    onChange={(e)=>setTransactionAmount(e.target.value)}>
                    </input>
                </div>
                <button className="btn">
                    Add Transaction
                </button>
            </form>
        </div>
    )
}

export default AddTransaction;