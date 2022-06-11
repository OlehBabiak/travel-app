

const Button = ({children, className, type, onClick}) => {
    return (
        <button
            onClick={onClick}
            className={className}
            type={type || 'button'}
        >
            {children}
        </button>
    );
}

export default Button