import "./../styles/HomeView.css";

export default function VendorsCard({ pic, name, city }) {
  return (
    <div className="vendors-card">
      <img className="vendords-images" src={pic} alt={name} />
      <h2 className="vendors-name">{name}</h2>
      <p>{city}</p>
    </div>
  );
}
