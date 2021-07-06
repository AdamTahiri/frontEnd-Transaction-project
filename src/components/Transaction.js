import { Link } from 'react-router-dom';
import "./Transaction.css"

function Transaction({ transaction, index }) {
    return (
        <div className="transaction-sec">
            <ul>
                <li>{transaction.date} <Link to={`/transactions/${index}`}>{transaction.name}</Link> {transaction.amount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</li>
            </ul>
            
        </div>
    )
}

export default Transaction
