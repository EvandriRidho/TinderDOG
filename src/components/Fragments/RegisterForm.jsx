import { Link } from "react-router-dom";
import Button from "../Elements/Button/button";
import InputForm from "../Elements/Input/Index";

const RegisterForm = () => {
  return (
    <form className="flex flex-col gap-5 w-3/4 sm:w-1/2 lg:w-1/4 h-auto p-10 bg-gray-100 rounded-lg border-2">
      <h1 className="font-bold text-3xl">Sign Up</h1>
      <p className="text-slate-500">Welcome! please enter your details.</p>

      <InputForm
        label="Fullname"
        id="fullname"
        name="fullname"
        type="text"
        placeholder="Enter your fullname"
      />

      <InputForm
        label="Email"
        id="email"
        name="email"
        type="text"
        placeholder="Example@gmail.com"
      />

      <InputForm
        label="Password"
        id="password"
        name="password"
        type="password"
        placeholder="***********"
      />

      <InputForm
        label="Confirm Password"
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        placeholder="***********"
      />

      <Button>Sign Up</Button>

      <p className="text-slate-500 text-center">
        have a account?{" "}
        <Link
          className="text-black font-bold hover:text-slate-600"
          to={"/login"}
        >
          {" "}
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
