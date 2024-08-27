import Input from "./Input.jsx";
import Label from "./Label.jsx";

const InputForm = (props) => {
  const { name, label, id, type, placeholder } = props;
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label htmlFor={name}>{label}</Label>
      <Input id={id} type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
