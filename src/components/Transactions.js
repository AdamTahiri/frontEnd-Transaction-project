import React from 'react'
import Transaction from './Transaction';

function Transactions({ transactions }) {
    return (
        <div>
            <h1>Bank Account Total: $1000</h1>
            {transactions.map((transaction, index) => {
                return <Transaction key={index} transaction={transaction} index={index} />
            })}
        </div>
    )
}

export default Transactions
