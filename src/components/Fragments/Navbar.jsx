import Button from "../Elements/Button/button";

let Navbar = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    window.location.href = "/login";
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    window.location.href = "/register";
  };
  return (
    <nav className="bg-gradient-to-r from-red-500 to-blue-400 h-24 mb-12">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white p-6">TinDog</h1>
        <div className="hidden md:flex">
          <Button
            classname="bg-black md:mx-2 lg:mx-4 hover:bg-slate-500"
            onClick={handleLogin}
            type="submit"
          >
            Login
          </Button>
          <Button
            classname="bg-black md:mx-2 lg:mx-4 hover:bg-slate-500"
            onClick={handleSignUp}
            type="submit"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
