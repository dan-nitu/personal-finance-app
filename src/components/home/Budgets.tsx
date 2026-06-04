import Card from '../Card';
import Button from '../Button';
import { DonutChart } from '../DonutChart';
import ValueItem from '../home/ValueItem';

const Budgets = () => {
  return (
    <Card className='budgets'>
      <div className='budgets-title'>
        <h2>Budgets</h2>
        <Button variant='tertiary'>See Details</Button>
      </div>

      <div className='budgets-content'>
        <div className='donut-chart-wrapper'>
          <DonutChart
            data={[
              { value: 50, color: 'green' },
              { value: 750, color: 'cyan' },
              { value: 75, color: 'yellow' },
              { value: 100, color: 'navy' },
            ]}
            currentAmount={338}
          />
        </div>

        <div className='budgets-amounts'>
          <ValueItem label='green' title='Entertainment' amount={50} />
          <ValueItem label='cyan' title='Bills' amount={750} />
          <ValueItem label='yellow' title='Dining Out' amount={75} />
          <ValueItem label='navy' title='Personal Care' amount={100} />
        </div>
      </div>
    </Card>
  );
};
export default Budgets;
