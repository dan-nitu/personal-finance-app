import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';

import Home from './pages/Home';
import Transactions from './pages/Transactions';
import Budgets from './pages/Budgets';
import Pots from './pages/Pots';
import RecurringBills from './pages/RecurringBills';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/budgets' element={<Budgets />} />
        <Route path='/pots' element={<Pots />} />
        <Route path='/recurring-bills' element={<RecurringBills />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
