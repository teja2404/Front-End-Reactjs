import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const showCart = useSelector(state => state.uistate.cartIsVisible);
  // const showCart = useSelector((state) => {console.log(state.uistate.cartIsVisible);});
  console.log(showCart);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
