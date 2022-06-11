

const Button = ({children, className, type}) => {
    return (
        <button
            className={className}
            type={type || 'button'}
        >
            {children}
        </button>
    );
}

export default Button