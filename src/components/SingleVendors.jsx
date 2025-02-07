import { useParams } from "react-router-dom";
import { VendorsList } from "../helpers/VendorsList";
import "./SingleVendor.css";

export default function SinglePage() {
  const { id } = useParams();
  const card = VendorsList.find((vendor) => vendor.id === parseInt(id));

  if (!card) return <h2 className="no-vendor">No Vendor Found</h2>;

  return (
    <div className="vendor-container">
      <img src={card.image} alt="Vendor Image" className="vendor-image" />
      <div className="vendor-info">
        <h1 className="vendor-name">{card.name}</h1>
        <p className="vendor-city">{card.city}</p>
        <p className="vendor-description">{card.description}</p>
      </div>
    </div>
  );
}
