import "./../styles/HomeView.css";
export default function ProductCard({ pic, name, price, rating, color }) {
  return (
    <div className="arrivals-card">
      <img className="arrivals-images" src={pic} alt={name} />
      <h2 className="products-heading">{name}</h2>
      <p>{price}</p>
      <p>{rating}</p>
      <p>{color}</p>
    </div>
  );
}
