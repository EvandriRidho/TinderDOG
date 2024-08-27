import { Link } from "react-router-dom";
import InputForm from "../Elements/Input/Index";

let LoginForm = () => {
  return (
    <form className="flex flex-col gap-5 w-3/4 sm:w-1/2 lg:w-1/4 h-auto p-10 bg-gray-100 rounded-lg border-2">
      <h1 className="font-bold text-3xl">Login</h1>
      <p className="text-slate-500">Welcome back! please enter your details.</p>

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

      <a href="#" className="font-bold hover:text-slate-600">
        Forget Password
      </a>

      <button className="bg-black text-white h-10  rounded-md hover:bg-slate-600">
        Login
      </button>

      <p className="text-slate-500 text-center">
        Dont have a account?{" "}
        <Link
          className="text-black font-bold hover:text-slate-600"
          to={"/register"}
        >
          {" "}
          Sign up for free
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
