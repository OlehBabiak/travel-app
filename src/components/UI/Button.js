const Button = ({ children, className, type, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      type={type || "button"}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
