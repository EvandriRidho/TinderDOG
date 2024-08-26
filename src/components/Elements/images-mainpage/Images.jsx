let Images = (props) => {
  const { src, alt } = props;
  return <img src={src} alt={alt} className="my-14 md:mx-12" />;
};

export default Images;
