const Input = (props) => {
  const { id, type, name, placeholder } = props;
  return (
    <input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      className="h-10 rounded-md border px-3"
    />
  );
};

export default Input;
