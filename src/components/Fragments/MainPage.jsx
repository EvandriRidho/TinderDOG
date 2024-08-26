let MainPage = () => {
  return (
    <div className="mt-36 mb-12">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center">
          {
            '"I no longer have to sniff other dogs for love. I\'ve found the hottest Corgi on TinDog."'
          }
        </h1>
        <img
          src="./images/dog-img.jpg"
          alt="DogIMG"
          className="rounded-full mx-auto mt-10 mb-2"
        />
        <p>Pebbles, New York</p>
        <div className="flex my-16">
          <div className="w-full sm:flex">
            <img
              src="./images/techcrunch.png"
              alt="techcrunch"
              className="my-14 md:mx-12"
            />
            <img
              src="./images/mashable.png"
              alt="mashable"
              className="my-14 md:mx-12"
            />
            <img
              src="./images/bizinsider.png"
              alt="bizinsider"
              className="my-14 md:mx-12"
            />
            <img src="./images/tnw.png" alt="tnw" className="my-14 md:mx-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
