import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./TransactionEdit.css";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const TransactionEditForm = ({ updateTransaction }) => {
  const { index } = useParams();
  let history = useHistory();
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: 0,
    from: "",
  });

  const handleInput = (e) => {
    const updatedTransaction = {
      ...transaction,
      [e.target.id]: e.target.value,
    };
    setTransaction(updatedTransaction);
  };

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${API}/transactions/${index}`);
      setTransaction(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleAmount = (e) => {
    setTransaction({ ...transaction, amount: Number(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTransaction(transaction, index);
    history.push("/transactions");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          onChange={handleInput}
          placeholder="date"
          required
        />
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          onChange={handleInput}
          placeholder="name"
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          onChange={handleAmount}
          placeholder="amount"
        />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          type="text"
          onChange={handleInput}
          placeholder="from"
        />
        <br />
        <input className="submit-button" type="Submit" />
      </form>
    </div>
  );
};

export default TransactionEditForm;
