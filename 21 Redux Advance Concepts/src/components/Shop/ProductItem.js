import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch} from 'react-redux';
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  console.log(props)
  const { title, price, description, item} = props;
  const dispatch = useDispatch()

  const addtoCartHandler = (item) => {
    dispatch(cartActions.addItemToCart(item));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => addtoCartHandler(item)}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
