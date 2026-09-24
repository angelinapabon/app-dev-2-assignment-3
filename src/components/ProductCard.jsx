import './ProductCard.css';

function ProductCard({ name, price, image, description }) {
  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img
          src={image}
          alt={name}
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <div className="product-footer">
          <span className="product-price">${price.toFixed(2)}</span>
          <button className="add-to-cart-btn" type="button">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;