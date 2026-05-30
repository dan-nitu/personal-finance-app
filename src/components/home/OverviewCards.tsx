import Card from '../Card';

const OverviewCards = () => {
  const cardsData = [
    {
      label: 'Current Balance',
      value: '$4,836.00',
      variant: 'dark',
    },
    {
      label: 'Income',
      value: '$3,814.25',
    },
    {
      label: 'Expenses',
      value: '$1,700.50',
    },
  ];

  return (
    <div className='overview-cards'>
      {cardsData.map((card, index) => (
        <Card tag='dl' key={index} variant={card.variant}>
          <dt className='card-label'>{card.label}</dt>
          <dd>{card.value}</dd>
        </Card>
      ))}
    </div>
  );
};
export default OverviewCards;
