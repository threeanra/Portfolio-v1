const Button = (props) => {
  const { children = "...", variant } = props;
  return (
    <button
      className={`h-20 px-7 font-semibold rounded-full ${variant} text-custom-black`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
