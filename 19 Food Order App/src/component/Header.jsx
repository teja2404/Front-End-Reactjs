import { useContext } from "react";
import logo from "@/assets/logo.jpg";
import Button from "@/ui/Button";
import CartContext from "@/store/cartContext.jsx";
import userProgressContext from "@/store/userProgress";
export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(userProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNmberOfItems, item) => {
    return totalNmberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Restuarant Image" />
        <h1>React Food</h1>
      </div>
      <nav>
        <Button onClick={handleShowCart} textOnly>
          {" "}
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
