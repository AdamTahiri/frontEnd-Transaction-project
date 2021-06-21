import Transactions from '../components/Transactions'

const Index = ({ transactions, total }) => {
    return (
        <div>
            <h1>Welcome to Index Page</h1>
            <Transactions transactions={transactions} total={total} />
        </div>
    )
}

export default Index
