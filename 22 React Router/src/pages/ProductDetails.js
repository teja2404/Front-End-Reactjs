import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const urlParams = useParams();
  return (
    <div>
      <h1>My Product Details Page</h1>
      <p>{urlParams.productId}</p>
    </div>
  );
}
