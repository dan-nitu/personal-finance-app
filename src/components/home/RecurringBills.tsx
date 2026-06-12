import Card from '../Card';
import Button from '../Button';
import BillCard from './BillCard';

const RecurringBills = () => {
  return (
    <Card className='recurring-bills'>
      <div className='recurring-bills-title'>
        <h2>Recurring Bills</h2>
        <Button variant='tertiary'>See Details</Button>
      </div>

      <div className='recurring-bills-content'>
        <BillCard label='green' title='Paid Bills' amount={190} />
        <BillCard label='yellow' title='Total Upcoming' amount={194.98} />
        <BillCard label='cyan' title='Due Soon' amount={59.98} />
      </div>
    </Card>
  );
};
export default RecurringBills;
