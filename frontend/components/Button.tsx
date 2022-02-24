interface ButtonProps {
  onClick: () => void;
  classNames?: string;
  type?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  classNames,
  type = "primary",
}) => {
  return (
    <button
      onClick={onClick}
      className={`${type === "primary" && "btn-primary"} ${
        type === "secondary" && "btn-secondary"
      } ${classNames}`}
    >
      {children}
    </button>
  );
};

export default Button;
