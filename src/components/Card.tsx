interface CardProps {
  tag?: React.ElementType;
  variant?: string;
  children: React.ReactNode;
}

const Card = ({ tag: Component = 'div', variant, children }: CardProps) => {
  return <Component className={`card ${variant}`}>{children}</Component>;
};
export default Card;
