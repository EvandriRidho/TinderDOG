import Images from "../Elements/images-mainpage/images";

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
            <Images
              src="./../../../public/images/techcrunch.png"
              alt="techcrunch"
            />
            <Images
              src="./../../../public/images/mashable.png"
              alt="Mashable"
            />
            <Images
              src="./../../../public/images/bizinsider.png"
              alt="bizinsider"
            />
            <Images src="./../../../public/images/tnw.png" alt="tnw" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
