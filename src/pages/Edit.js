import TransactionEditForm from '../components/TransactionEditForm';

const Edit = ({ transactions, updateTransaction }) =>  {
    return (
        <div>
            <h1>Edit Transaction</h1>
            <TransactionEditForm transactions={transactions} updateTransaction={updateTransaction} />
        </div>
    )
}

export default Edit
