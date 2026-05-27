import OverviewIcon from './nav-icons/OverviewIcon';
import TransactionsIcon from './nav-icons/TransactionsIcon';
import BudgetsIcon from './nav-icons/BudgetsIcon';
import PotsIcon from './nav-icons/PotsIcon';
import RecurringBillsIcon from './nav-icons/RecurringBillsIcon';

import NavigationItem from './NavigationItem';

const Navigation = () => {
  const navItems = [
    {
      icon: <OverviewIcon />,
      label: 'Overview',
      url: '/',
      active: true,
    },
    {
      icon: <TransactionsIcon />,
      label: 'Transactions',
      url: '/transactions',
    },
    {
      icon: <BudgetsIcon />,
      label: 'Budgets',
      url: '/budgets',
    },
    {
      icon: <PotsIcon />,
      label: 'Pots',
      url: '/pots',
    },
    {
      icon: <RecurringBillsIcon />,
      label: 'Recurring Bills',
      url: '/recurring-bills',
    },
  ];

  return (
    <nav>
      {navItems.map((item) => (
        <NavigationItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          url={item.url}
          active={item.active}
        />
      ))}
    </nav>
  );
};

export default Navigation;
