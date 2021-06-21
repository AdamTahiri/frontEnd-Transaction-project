import TransactionDetail from "../components/TransactionDetail";

const Show = ({ deleteTransaction }) => {
  return (
    <div>
      <h2>Show</h2>
      <section>
        <TransactionDetail deleteTransaction={deleteTransaction} />
      </section>
    </div>
  );
};

export default Show;
