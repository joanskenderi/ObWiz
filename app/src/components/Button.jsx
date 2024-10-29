const baseStyles =
  'w-full px-4 py-3 font-semibold rounded-full shadow-lg transition focus:outline-none focus:ring-4';

const variantStyles = {
  primary: 'bg-blue-800 text-white hover:bg-blue-700 focus:ring-blue-500',
  secondary:
    'bg-slate-300 text-slate-700 hover:bg-slate-400 focus:ring-slate-300',
  previous:
    'w-1/2 mr-2 bg-slate-300 text-slate-700 hover:bg-slate-400 focus:ring-slate-300',
  next: 'w-1/2 ml-2 bg-blue-800 text-white hover:bg-blue-700 focus:ring-blue-500',
  finish:
    'w-1/2 ml-2 bg-slate-800 text-white hover:bg-slate-700 focus:ring-slate-500',
};

const Button = ({
  onClick,
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
