interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary' | 'destroy';
  children: React.ReactNode;
}

const Button = ({ variant, children }: ButtonProps) => {
  return <div className={`button-${variant}`}>{children}</div>;
};

export default Button;
