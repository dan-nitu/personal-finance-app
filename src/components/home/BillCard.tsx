interface BillCardProps {
  label: string;
  title: string;
  amount: number;
}

const BillCard = ({ label, title, amount }: BillCardProps) => {
  return (
    <dl className={`bill-card ${label}`}>
      <dt>{title}</dt>
      <dd>${amount}</dd>
    </dl>
  );
};
export default BillCard;
