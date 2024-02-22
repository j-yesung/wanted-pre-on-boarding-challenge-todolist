interface ButtonProps {
  type: 'button' | 'submit';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { type, children, onClick } = props;

  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
