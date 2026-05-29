import type { ReactNode } from 'react';

interface NavigationItemProps {
  icon: ReactNode;
  label: string;
  url: string;
  active?: boolean;
}

const NavigationItem = ({ icon, label, url, active }: NavigationItemProps) => {
  return (
    <a className={`navigation-item ${active ? 'active' : ''}`} href={url}>
      {typeof icon === 'string' ? <img src={icon} alt={label} /> : icon}
      <span>{label}</span>
    </a>
  );
};

export default NavigationItem;
