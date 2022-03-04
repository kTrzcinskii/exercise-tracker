type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  classNames?: string;
  variantType?: "primary" | "secondary" | "primary-nav" | "secondary-nav";
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
      } ${variantType === "primary-nav" && "btn-nav-primary"} ${
        variantType === "secondary-nav" && "btn-nav-secondary"
      } ${classNames}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
