let List = (props) => {
  const { title, desc } = props;
  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm">{desc}</p>
    </div>
  );
};

export default List;
