import classes from './CartItem.module.css';
import {cartActions} from "../store/cart-slice";
import {useDispatch} from "react-redux";

const CartItem = (props) => {

  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;
  const increaseHandler = ()=>{
      dispatch(cartActions.addItemToCart({
          id,
          title,
          price,
      }))
  }

  const removeHandler = ()=>{
      dispatch(cartActions.removeItemFromCart(id));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <button onClick={increaseHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
