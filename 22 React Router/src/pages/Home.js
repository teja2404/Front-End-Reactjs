import { Link, useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  };
  return (
    <div>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </div>
  );
}
