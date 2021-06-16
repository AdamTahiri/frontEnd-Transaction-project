import TransactionNewForm from '../components/TransactionNewForm';

const New = ({ addTransaction }) => {
    return (
        <div>
            <h1>Welcome to New Page</h1>
            <TransactionNewForm addTransaction={addTransaction} />
        </div>
    )
}

export default New
