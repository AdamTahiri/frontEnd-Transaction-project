import Transactions from '../components/Transactions'

const Index = ({ transactions }) => {
    return (
        <div>
            <h1>Welcome to Index Page</h1>
            <Transactions transactions={transactions} />
        </div>
    )
}

export default Index
