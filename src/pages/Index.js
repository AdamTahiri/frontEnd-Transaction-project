import Transactions from '../components/Transactions'

const Index = ({ transactions, total }) => {
    return (
        <div>
            <h1>Your Transactions</h1>
            <Transactions transactions={transactions} total={total} />
        </div>
    )
}

export default Index
