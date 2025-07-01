import Cart from "@/component/Cart/Cart";
import Checkout from "@/component/Cart/Checkout";
import Header from "@/component/Header";
import Meals from "@/Component/Meals";
import { CartContextProvider } from "@/store/cartContext";
import { UserProgressContextProvider } from "@/store/userProgress";
function App() {
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      {/* <Modal open={errorUpdatingPlaces} onClose={handleError}>
        {errorUpdatingPlaces && (
          <Error
            title="An error occurred!"
            message={errorUpdatingPlaces.message}
            onConfirm={handleError}
          />
        )}
      </Modal> */}
      <UserProgressContextProvider>
        <CartContextProvider>
          <Header />
          <Meals />
          <Cart />
          <Checkout />
        </CartContextProvider>
      </UserProgressContextProvider>
    </>
  );
}

export default App;
