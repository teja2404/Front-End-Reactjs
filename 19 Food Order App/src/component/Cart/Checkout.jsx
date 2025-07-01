import { useContext, useCallback, useActionState } from "react";
import Modal from "@/component/Modal";
import Input from "@/ui/Input";
import CartContext from "@/store/cartContext";
import userProgressContext from "@/store/userProgress";
import { currencyFormatter } from "@/util/formatting";
import Button from "@/ui/Button";
import Error from "@/component/Error";
import useHttp from "@/hooks/useHttp";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(userProgressContext);

  const { data, error, sendRequest, clearData } = useHttp(
    "http://localhost:3000/orders",
    requestConfig
  );

  async function checkoutAction(prevState, fd) {
    console.log(fd);
    const customerData = Object.fromEntries(fd.entries());
    await sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      })
    );
  }

  const [formState, formAction, isSending] = useActionState(
    checkoutAction,
    null
  );

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  function handleFinish() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  let actions = (
    <>
      <Button type="button" onClick={handleClose} textOnly>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isSending) {
    actions = <span>Sending order data....</span>;
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleClose}
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <>
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleClose}
      >
        <form action={formAction}>
          <h2>Checkout</h2>
          <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
          <Input label="Full Name" name="name" type="text" id="name" />
          <Input label="E-Mail Address" name="email" type="email" id="email" />
          <Input label="Street" name="street" type="text" id="street" />
          <div className="control-row">
            <Input
              label="Postal Code"
              name="postal-code"
              type="text"
              id="postal-code"
            />
            <Input label="City" name="city" type="text" id="city" />
          </div>
          {error && <Error title="An error occurred!" message={error} />}
          <p className="modal-actions">{actions}</p>
        </form>
      </Modal>
    </>
  );
}
