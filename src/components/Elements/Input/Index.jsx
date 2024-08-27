import Input from "./Input";
import Label from "./Label";

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
