import OverviewCards from '../components/home/OverviewCards';

import Pots from './../components/home/Pots';
import Transactions from '../components/home/Transactions';
import Budgets from '../components/home/Budgets';
import RecurringBills from '../components/home/RecurringBills';

export default function Home() {
  return (
    <main className='home-page'>
      <h1>Overview</h1>
      <OverviewCards />

      <div className='content-wrapper'>
        <div className='section-wrapper'>
          <Pots />
          <Transactions />
        </div>

        <div className='section-wrapper'>
          <Budgets />
          <RecurringBills />
        </div>
      </div>
    </main>
  );
}
