import OverviewIcon from './icons/nav-icons/OverviewIcon';
import TransactionsIcon from './icons/nav-icons/TransactionsIcon';
import BudgetsIcon from './icons/nav-icons/BudgetsIcon';
import PotsIcon from './icons/nav-icons/PotsIcon';
import RecurringBillsIcon from './icons/nav-icons/RecurringBillsIcon';

import LogoSmall from '../assets/images/logo-small.svg';
import LogoLarge from '../assets/images/logo-large.svg';
import MinimizeMenuIcon from './icons/nav-icons/MinimizeMenuIcon';

import NavigationItem from './NavigationItem';

import { useState } from 'react';

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

  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <nav className={`${isMinimized ? 'minimized' : ''}`}>
      <div className='logo-wrapper'>
        {isMinimized ? (
          <img src={LogoSmall} alt='Logo' />
        ) : (
          <img src={LogoLarge} alt='Logo' />
        )}
      </div>

      <div className='nav-items'>
        {navItems.map((item) => (
          <NavigationItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            url={item.url}
            active={item.active}
          />
        ))}
      </div>

      <div className='minimize-menu' onClick={handleToggleMenu}>
        <MinimizeMenuIcon />
        <span>Minimize Menu</span>
      </div>
    </nav>
  );
};

export default Navigation;
