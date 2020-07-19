import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import AccountSummary from './components/AccountSummary';
import TransactionHistory from './components/TransactionHistory'
import AddTransaction from  './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
      <Balance/>
      </div>
      <AccountSummary/>
      <TransactionHistory/>
      <AddTransaction/>
    </GlobalProvider>
  );
}

export default App;
