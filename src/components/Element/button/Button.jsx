const Button = (props) => {
  const { children = "...", variant } = props;
  return (
    <button
      className={`h-20 px-7 font-semibold rounded-full ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
