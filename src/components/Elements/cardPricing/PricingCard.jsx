import Button from "../Button/button";

let PricingCard = (props) => {
  const { children, title, price, list1, list2, list3 } = props;
  return (
    <div className="flex justify-center w-full px-4 mb-12 lg:w-1/3">
      <div className="w-full bg-white rounded-lg shadow-lg p-6 mx-2 border border-black border-1 lg:w-full sm:w-full">
        <div className="text-center mb-4 border-b border-black border-1">
          <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
        </div>

        <div className="mb-4 text-center">
          <p className="text-4xl font-bold text-slate-600 mb-2">
            <span className="text-slate-800">{price}</span>mo
          </p>
          <li className="list-none">{list1}</li>
          <li className="list-none">{list2}</li>
          <li className="list-none">{list3}</li>
        </div>

        <Button>{children}</Button>
      </div>
    </div>
  );
};

export default PricingCard;
