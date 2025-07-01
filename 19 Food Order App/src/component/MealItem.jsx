import { currencyFormatter } from "@/util/formatting";
import Button from "@/ui/Button";
import { useContext } from "react";
import CartContext from "@/store/cartContext";

export default function MealItem({
  meals,
  isLoading,
  loadingText,
  fallbackText,
}) {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart(meal) {
    cartCtx.addItem(meal);
  }
  return (
    <>
      {/* {isLoading && <p className="fallback-text">{loadingText}</p>}
      {!isLoading && meals.length === 0 && (
        <p className="fallback-text">{fallbackText}</p>
      )} */}
      {meals.map((meal) => (
        <li className="meal-item" key={meal.id}>
          <article>
            <img src={`http://localhost:3000/${meal.image}`} alt="" />
            <div>
              <h3>{meal.name}</h3>
              <p className="meal-item-price">
                {currencyFormatter.format(meal.price)}
              </p>
              <p className="meal-item-description">{meal.description}</p>
            </div>

            <p className="meal-item-actions">
              <Button onClick={() => handleAddMealToCart(meal)}>
                Add to Cart
              </Button>
            </p>
          </article>
        </li>
      ))}
    </>
  );
}
