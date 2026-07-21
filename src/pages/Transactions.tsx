import sortByIcon from '../assets/images/icon-sort-mobile.svg';
import categoryIcon from '../assets/images/icon-filter-mobile.svg';

import SearchInput from '../components/SearchInput';
import IconSelect from '../components/IconSelect';

export default function Transactions() {
  const sortByOptions = [
    'Latest',
    'Oldest',
    'A to Z',
    'Z to A',
    'Highest',
    'Lowest',
  ];
  const categoryOptions = [
    'All Transactions',
    'Entertainment',
    'Bills',
    'Groceries',
    'Dining Out',
    'Transportation',
  ];

  return (
    <main className='transactions-page'>
      <h1>Transactions</h1>

      <div className='content-wrapper'>
        <div className='transaction-controls'>
          <SearchInput />

          <div className='controls'>
            <IconSelect
              icon={sortByIcon}
              text={'Sort by'}
              options={sortByOptions}
            />
            <IconSelect
              icon={categoryIcon}
              text={'Category'}
              options={categoryOptions}
            />
          </div>
        </div>

        <div className='transaction-list'></div>
        <div className='pagination'></div>
      </div>
    </main>
  );
}
