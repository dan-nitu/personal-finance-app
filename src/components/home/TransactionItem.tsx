interface TransactionItemProps {
  icon: string;
  title: string;
  value: string;
  date: string;
}

const TransactionItem = ({
  icon,
  title,
  value,
  date,
}: TransactionItemProps) => {
  return (
    <div className='transaction-item'>
      <div className='transaction-title'>
        <img src={icon} alt='User' />
        <span>{title}</span>
      </div>

      <div className='transaction-data'>
        <span className='transaction-value'>{value}</span>
        <span className='transaction-date'>{date}</span>
      </div>
    </div>
  );
};
export default TransactionItem;
