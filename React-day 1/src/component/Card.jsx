function Card({ image }) {
  const cardItem = {
    name: "Screechers",
    price: "10000",
  };

  return (
    <div className="col-3">
      <div className="card-item">
        <div className="card-img">
          <img src={image} alt="product" />
        </div>
        <h3>{cardItem.name}</h3>
        <p>Rs {cardItem.price}</p>
        <a href="javascript:void(0)">you can't have it</a>
      </div>
    </div>
  );
}

export default Card;
