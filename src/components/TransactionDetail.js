import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const TransactionDetail = ({ deleteTransaction }) => {
  const [transaction, setTransaction] = useState({});
  let { index } = useParams();
  let history = useHistory();

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

  const handleDelete = () => {
    deleteTransaction(index);
    history.push("/transactions");
  };

  return (
    <div>
      <h1>Transaction Details</h1>
      <h2>Transaction: {transaction.name}</h2>
      <h3>From: {transaction.from}</h3>
      <h3>Date: {transaction.date}</h3>
      <h3>Amount: {transaction.amount}</h3>
      <div>
          <Link to={`/transactions`}>
              <button>Back</button>
          </Link>
      </div>
      <div>
          <Link to={`/transactions/${index}/edit`}>
              <button>Edit</button>
          </Link>
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TransactionDetail;
