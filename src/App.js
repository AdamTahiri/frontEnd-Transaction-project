import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
//Components
import NavBar from "./components/NavBar"

//Pages
import Home from "./pages/Home"
import Index from "./pages/Index";
import New from "./pages/New";


import axios from 'axios';

import './App.css';

import { apiURL } from './util/apiURL';
const API = apiURL();

function App() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${API}/transactions`);
      setTransactions(res.data);
      debugger;
    } catch (error) {
      console.log(error)
    }
  }

  const addTransaction = async (newTransaction) => {
    try {
      const res = await axios.post(`${API}/transactions`, newTransaction);
      setTransactions(prevState => [...prevState, res.data]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, [])

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/transactions">
            <Index transactions={transactions}/>
          </Route>
          <Route path="/transactions/new">
            <New addTransaction={addTransaction}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
