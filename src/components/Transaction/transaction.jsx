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
            <td className={css.type}>{type}</td>
            <td className={css.amount}>{amount}</td>
            <td className={css.currency}>{currency}</td>
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