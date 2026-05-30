interface CardProps {
  tag?: React.ElementType;
  variant?: string;
  className?: string;
  children: React.ReactNode;
}

const Card = ({
  tag: Component = 'div',
  variant,
  children,
  className,
}: CardProps) => {
  return (
    <Component className={`card ${variant} ${className || ''}`}>
      {children}
    </Component>
  );
};
export default Card;
