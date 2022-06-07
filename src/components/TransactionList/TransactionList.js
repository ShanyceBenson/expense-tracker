import React, { useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Transaction } from '../Transaction/Transaction';

export const TransactionList = ({ transaction }) => {
    const { transactions } = useContext(GlobalContext);

  return (
      <div>
          <h3>History</h3>
          <ul className="list">
              {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
              
          </ul>
      </div>
  )
}
