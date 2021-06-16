import { Link } from 'react-router-dom'

function Transaction({ transaction, index }) {
    return (
        <div>
            <ul>
                <li>{transaction.date} <Link to={`/transactions/${index}`}>{transaction.name}</Link> {transaction.amount}</li>
            </ul>
            
        </div>
    )
}

export default Transaction
