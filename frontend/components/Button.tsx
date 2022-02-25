type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  classNames?: string;
  variantType?: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = ({
  children,
  classNames,
  variantType = "primary",
  ...props
}) => {
  return (
    <button
      className={`${variantType === "primary" && "btn-primary"} ${
        variantType === "secondary" && "btn-secondary"
      } ${classNames}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
