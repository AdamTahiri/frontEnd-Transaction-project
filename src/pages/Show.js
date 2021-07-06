import TransactionDetail from "../components/TransactionDetail";

const Show = ({ deleteTransaction }) => {
  return (
    <div>
      <section>
        <TransactionDetail deleteTransaction={deleteTransaction} />
      </section>
    </div>
  );
};

export default Show;
