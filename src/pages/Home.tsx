import OverviewCards from '../components/home/OverviewCards';

import Card from '../components/Card';
import Button from '../components/Button';

export default function Home() {
  return (
    <main className='home-page'>
      <h1>Overview</h1>

      <OverviewCards />

      <Card className='pots'>
        <div className='title'>
          <h2>Pots</h2>
          <Button variant='tertiary'>See Details</Button>
        </div>
      </Card>
    </main>
  );
}
