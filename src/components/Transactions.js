import React from 'react'
import Transaction from './Transaction';
import './Transactions.css'

function Transactions({ transactions, total }) {
    return (
        <div className="trans-sec">
            <h1 className="total">Bank Account Total: ${total.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
            {transactions.map((transaction, index) => {
                return <Transaction key={index} transaction={transaction} index={index} />
            })}
        </div>
    )
}

export default Transactions
