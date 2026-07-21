interface TransactionListItemProps {
  icon: string;
  title: string;
  category: string;
  amount: number;
  type?: 'Income' | 'Expense';
  date: string;
}

const TransactionListItem = ({
  icon,
  title,
  category,
  amount,
  type = 'Expense',
  date,
}: TransactionListItemProps) => {
  return (
    <div className='transaction-list-item'>
      <div>
        <img src={icon} alt={title} className='transaction-icon' />
        <div className='transaction-details'>
          <h3>{title}</h3>
          <p>{category}</p>
        </div>
      </div>
      <div>
        <div className={`transaction-amount ${type === 'Income' && 'income'}`}>
          {type === 'Income' ? '+' : '-'}${amount.toFixed(2)}
        </div>
        <div className='transaction-date'>{date}</div>
      </div>
    </div>
  );
};

export default TransactionListItem;
