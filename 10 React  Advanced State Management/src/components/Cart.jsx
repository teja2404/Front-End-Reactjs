import { useContext, use } from 'react'
import { CartContext } from '../store/shoping-cart-context'

export default function Cart({ }) {
  const { items, updateItemQuantity } = useContext(CartContext)
  // const cartCtx = use(CartContext)

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    /*<CartContext.Consumer>
      {(cartCtx) => {
        const totalPrice = cartCtx.items.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;
        return <div id="cart">
          {cartCtx.items.length === 0 && <p>No items in cart!</p>}
          {cartCtx.items.length > 0 && (
            <ul id="cart-items">
              {cartCtx.items.map((item) => {
                const formattedPrice = `$${item.price.toFixed(2)}`;

                return (
                  <li key={item.id}>
                    <div>
                      <span>{item.name}</span>
                      <span> ({formattedPrice})</span>
                    </div>
                    <div className="cart-item-actions">
                      <button onClick={() => onUpdateItemQuantity(item.id, -1)}>
                        -
                  </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onUpdateItemQuantity(item.id, 1)}>
                        +
                  </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
          <p id="cart-total-price">
            Cart Total: <strong>{formattedTotalPrice}</strong>
          </p>
        </div>
      }}
    </CartContext.Consumer> alternate way to consume Context api*/
    <div id="cart">
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => updateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
