import Card from '../Card';
import Button from '../Button';
import ValueItem from '../home/ValueItem';
import potsIcon from '../../assets/images/icon-pot.svg';

const Pots = () => {
  return (
    <Card className='pots'>
      <div className='pot-title'>
        <h2>Pots</h2>
        <Button variant='tertiary'>See Details</Button>
      </div>

      <div className='pot-content'>
        <Card className='pot-overview'>
          <img src={potsIcon} alt='Pots' />

          <div>
            <span>Total Saved</span>
            <span className='amount'>$850</span>
          </div>
        </Card>

        <div className='pot-amounts'>
          <ValueItem label='green' title='Savings' amount={159} />
          <ValueItem label='cyan' title='Gift' amount={40} />
          <ValueItem label='navy' title='Concert Ticket' amount={110} />
          <ValueItem label='yellow' title='New Laptop' amount={10} />
        </div>
      </div>
    </Card>
  );
};
export default Pots;
