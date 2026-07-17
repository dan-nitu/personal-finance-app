interface ValueItemProps {
  label: string;
  title: string;
  amount: number;
}

const ValueItem = ({ label, title, amount }: ValueItemProps) => {
  return (
    <dl className={`value-item color-${label}`}>
      <dt>{title}</dt>
      <dd>${amount}</dd>
    </dl>
  );
};
export default ValueItem;
