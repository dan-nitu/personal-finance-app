import Card from '../Card';
import Button from '../Button';
import TransactionItem from './TransactionItem';

import dummyIcon from '../../assets/images/avatars/aqua-flow-utilities.jpg';

const Transactions = () => {
  return (
    <Card className='transactions'>
      <div className='transactions-title'>
        <h2>Transactions</h2>
        <Button variant='tertiary'>View All</Button>
      </div>

      <div className='transaction-list'>
        <TransactionItem
          icon={dummyIcon}
          title='Emma Richardson'
          value='+$75.50'
          date='19 Aug 2024'
        />
        <TransactionItem
          icon={dummyIcon}
          title='Emma Richardson'
          value='+$75.50'
          date='19 Aug 2024'
        />
        <TransactionItem
          icon={dummyIcon}
          title='Emma Richardson'
          value='+$75.50'
          date='19 Aug 2024'
        />
        <TransactionItem
          icon={dummyIcon}
          title='Emma Richardson'
          value='+$75.50'
          date='19 Aug 2024'
        />
        <TransactionItem
          icon={dummyIcon}
          title='Emma Richardson'
          value='+$75.50'
          date='19 Aug 2024'
        />
      </div>
    </Card>
  );
};
export default Transactions;
