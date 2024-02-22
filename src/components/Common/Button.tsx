interface ButtonProps {
  type: 'button' | 'submit';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { type, children, onClick } = props;

  return (
    <button className="border-solid border-2 border-slate-500 rounded-md p-2" type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
