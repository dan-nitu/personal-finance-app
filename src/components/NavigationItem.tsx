import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface NavigationItemProps {
  icon: ReactNode;
  label: string;
  url: string;
  active?: boolean;
}

const NavigationItem = ({ icon, label, url, active }: NavigationItemProps) => {
  return (
    <Link className={`navigation-item ${active ? 'active' : ''}`} to={url}>
      {typeof icon === 'string' ? <img src={icon} alt={label} /> : icon}
      <span>{label}</span>
    </Link>
  );
};

export default NavigationItem;
