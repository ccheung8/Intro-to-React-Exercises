export function ProductCard({ name, price }) {
  return (
    <div className="productCard">
      <h2>Product Card</h2>
      <p>{name}</p>
      <p>Price: {price}</p>
    </div>
  );
}