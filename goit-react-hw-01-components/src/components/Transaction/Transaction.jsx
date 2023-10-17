import css from './transaction.module.css'
import PropTypes from 'prop-types'

export const Transaction =({ transactions })=>{
    return(
        <table className={css.transactionHistory}>
  <thead>
    <tr className={css.tr}>
      <th className={css.th}>Type</th>
      <th className={css.th}>Amount</th>
      <th className={css.th}>Currency</th>
    </tr>
  </thead>

  <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.transactionTr}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
</table>
    )
}
Transaction.propTypes = {
    transactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
      })
    ),
  };