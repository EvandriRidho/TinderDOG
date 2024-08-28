import { Link } from "react-router-dom";

let LoginForm = () => {
  return (
    <form className="flex flex-col gap-5 w-3/4 sm:w-1/2 lg:w-1/4 h-auto p-10 bg-gray-100 rounded-lg border-2">
      <h1 className="font-bold text-3xl">Login</h1>
      <p className="text-slate-500">Welcome back! please enter your details.</p>

      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="Example@gmail.com"
          className="h-10 rounded-md border px-3"
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="***********"
          className="h-10 rounded-md border px-3"
        />
      </div>

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
