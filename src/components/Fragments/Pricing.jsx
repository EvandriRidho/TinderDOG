import PricingCard from "../Elements/cardPricing/PricingCard";

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
        <PricingCard
          title="Chihuahua"
          price="$0/"
          list1="5 Matches Per Day"
          list2="10 Messages Per Day"
          list3="Unlimited App Usage"
        />

        <PricingCard
          title="Labrador"
          price="$49/"
          list1="Unlimited Matches"
          list2="Unlimited Messages"
          list3="Unlimited App Usage"
        />

        <PricingCard
          title="Mastiff"
          price="$99/"
          list1="Pirority Listing"
          list2="Unlimited Matches"
          list3="Unlimited Messages"
          list4="Unlimited App Usage"
        />
      </div>
    </div>
  );
};

export default Pricing;
