import OverviewCards from '../components/home/OverviewCards';

import Card from '../components/Card';

import Pots from './../components/home/Pots';
import Transactions from '../components/home/Transactions';

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

        <div>
          <Card className='budgets'>
            <h2>Budgets</h2>
          </Card>
        </div>
      </div>
    </main>
  );
}
