function Card({ item }) {
  const { desc, img, price, title, id } = item;
  return (
    <div className="menu-item" key={id}>
      <img src={img} alt={title} className="img" width={400} />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">${price}</span>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </div>
  );
}

export default Card;
