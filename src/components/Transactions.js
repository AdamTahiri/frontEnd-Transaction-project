import React from 'react'
import Transaction from './Transaction';

function Transactions({ transactions, total }) {
    return (
        <div>
            <h1>Bank Account Total: {total}</h1>
            {transactions.map((transaction, index) => {
                return <Transaction key={index} transaction={transaction} index={index} />
            })}
        </div>
    )
}

export default Transactions
