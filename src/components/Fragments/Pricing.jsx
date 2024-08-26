let Pricing = () => {
  return (
    <div className="mt-36 mb-12">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold">A Plan for Every Dogs Needs</h2>
        <p className="text-lg mt-2">
          Simple and affordable price plans for you and your dog.
        </p>
      </div>
      {/* Pricing Cards */}
      <div className="flex flex-wrap mx-auto mt-16">
        <div className="flex justify-center w-full px-4 mb-12 lg:w-1/3">
          <div className="w-full bg-white rounded-lg shadow-lg p-6 mx-2 border border-black border-1 lg:w-full sm:w-full">
            <div className="text-center mb-4 border-b border-black border-1">
              <h2 className="text-lg font-semibold text-slate-800">
                Chihuahua
              </h2>
            </div>

            <div className="mb-4 text-center">
              <p className="text-4xl font-bold text-slate-600 mb-2">
                <span className="text-slate-800">$0/</span>mo
              </p>
              <li className="list-none">5 Matches Per Day</li>
              <li className="list-none">10 Messages Per Day</li>
              <li className="list-none">Unlimited App Usage</li>
            </div>

            <button className="bg-transparent border border-black border-1 font-bold py-2 px-4 rounded text-slate-700 w-full hover:bg-slate-300">
              Sign Up
            </button>
          </div>
        </div>

        <div className="flex justify-center w-full px-4 mb-12 lg:w-1/3">
          <div className="w-full bg-white rounded-lg shadow-lg p-6 mx-2 border border-black border-1 lg:w-full sm:w-full">
            <div className="text-center mb-4 border-b border-black border-1">
              <h2 className="text-lg font-semibold text-slate-800">Labrador</h2>
            </div>

            <div className="mb-4 text-center">
              <p className="text-4xl font-bold text-slate-600 mb-2">
                <span className="text-slate-800">$15/</span>mo
              </p>
              <li className="list-none">Unlimited Matches</li>
              <li className="list-none">Unlimited Messages</li>
              <li className="list-none">Unlimited App Usage</li>
            </div>

            <button className="bg-black border-black border-1 font-bold py-2 px-4 rounded text-white w-full hover:bg-slate-500">
              Get Started
            </button>
          </div>
        </div>

        <div className="flex justify-center w-full px-4 mb-12 lg:w-1/3">
          <div className="w-full bg-white rounded-lg shadow-lg p-6 mx-2 border border-black border-1 lg:w-full sm:w-full">
            <div className="text-center mb-4 border-b border-black border-1">
              <h2 className="text-lg font-semibold text-slate-800">Mastiff</h2>
            </div>

            <div className="mb-4 text-center">
              <p className="text-4xl font-bold text-slate-600 mb-2">
                <span className="text-slate-800">$29/</span>mo
              </p>
              <li className="list-none">Pirority Listing</li>
              <li className="list-none">Unlimited Matches &amp; Messages</li>
              <li className="list-none">Unlimited App Usage</li>
            </div>

            <button className="bg-black font-bold py-2 px-4 rounded text-white w-full hover:bg-slate-500">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
