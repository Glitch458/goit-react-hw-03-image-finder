const Button = ({ loadMore }) => {
  return (
    <button className="Button" type="button" onClick={loadMore}>
      Load More
    </button>
  );
};

export default Button;
