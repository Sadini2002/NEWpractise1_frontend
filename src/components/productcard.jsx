import "./productcard.css";

export default function ProductCard() {
  return (
    <div className="card">
      <img src="https://picsum.photos/400/200" alt="Product preview" />
      <div className="card-content">
        <h2>Wireless Headphones</h2>
        <p>
          Experience high-quality sound with noise cancellation and long battery
          life.
        </p>
        <div className="price">$129.99</div>
        <div className="card-actions">
          <a href="#" className="card-btn visit">
            View Details
          </a>
          <button className="card-btn cart">Add to Cart</button>
        </div>

      </div>
    </div>
  );
}
