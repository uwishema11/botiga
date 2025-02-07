import { useParams } from "react-router-dom";
import { VendorsList } from "../helpers/VendorsList";

export default function SinglePage() {
  const { id } = useParams();
  const card = VendorsList.find((product) => product.id === parseInt(id));
  if (!card) return <h2> No Product found</h2>;
  return (
    <div>
      <img src={card.image} alt="Product Image" />
      <h1>{card.name}</h1>
      <p style={{ fontWeight: "bold", fontStyle: "italic" }}>{card.city}</p> 
      <p>{card.description}</p>
    </div>
  );
}
