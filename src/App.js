import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
//Components
import NavBar from "./components/NavBar"

//Pages
import Home from "./pages/Home"
import Index from "./pages/Index";
import Show from "./pages/Show";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Four0Four from "./pages/Four0Four";


import axios from 'axios';

import './App.css';

import { apiURL } from './util/apiURL';
const API = apiURL();

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = async (newTransaction) => {
    try {
      const res = await axios.post(`${API}/transactions`, newTransaction);
      setTransactions(prevState => [...prevState, res.data]);
    } catch (error) {
      console.log(error);
    }
  }

  const updateTransaction = async (updatedTransaction, index) => {
    try {
      await axios.put(`${API}/transactions/${index}`);
      const newTransactions = [...transactions];
      newTransactions[index] = updatedTransaction;
      setTransactions(newTransactions);
    } catch (error) {
      console.log(error)
    }
  }

  const deleteTransaction = async (index) => {
    try {
      await axios.delete(`${API}/transactions/${index}`);
      const deletedTran = [...transactions];
      deletedTran.splice(index, 1);
      setTransactions(deletedTran);
    } catch (error) {
      console.log(error)
    }
  }

  const transactionTotal = () => {
  let sum = 0;
  transactions.forEach((transaction) => {
    sum += transaction.amount
  })
  return sum;
}

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axios.get(`${API}/transactions`);
        setTransactions(res.data);
      } catch (error) {
        console.log(error)
      }
    }
    return fetchTransactions();
  }, [])

  const total = transactionTotal();
 
  return (
    <div className="App">
      <h1>Budget App!</h1>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/transactions">
            <Index transactions={transactions} total={total}/>
          </Route>
          <Route path="/transactions/new">
            <New addTransaction={addTransaction}/>
          </Route>
          <Route exact path="/transactions/:index">
            <Show transactions={transactions} deleteTransaction={deleteTransaction} />
          </Route>
          <Route path="/transactions/:index/edit">
            <Edit updateTransaction={updateTransaction} />
          </Route>
          <Route path="/*">
            <Four0Four />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
