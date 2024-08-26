import { Link } from "react-router-dom";

let RegisterPage = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <form className="flex flex-col gap-5 w-3/4 sm:w-1/2 lg:w-1/4 h-auto p-10 bg-gray-100 rounded-lg border-2">
        <h1 className="font-bold text-3xl">Sign Up</h1>
        <p className="text-slate-500">
          Welcome back! please enter your details.
        </p>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            name="fullname"
            placeholder="Masukkan Nama Anda"
            className="h-10 rounded-md border px-3"
          />
        </div>

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
            placeholder="**********"
            className="h-10 rounded-md border px-3"
          />
        </div>

        <a href="#" className="font-bold hover:text-slate-600">
          Forget Password
        </a>

        <button
          type="button"
          className="border bg-black text-white rounded-md h-10 hover:bg-slate-600"
        >
          Sign Up
        </button>

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
    </div>
  );
};

export default RegisterPage;
