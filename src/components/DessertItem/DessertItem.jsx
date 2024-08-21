import useCart from "../../hooks/useCart";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";
import IncrementDecrementBtn from "../IncrementDecrementBtn/IncrementDecrementBtn";
import styles from "./DessertItem.module.css";

function DessertItem({ dessert }) {
  const { cart } = useCart();

  const targetCartItemIndex = cart.findIndex(
    (cartItem) => cartItem.name === dessert.name
  );
  const targetCartItem = cart[targetCartItemIndex];
  const count = targetCartItem?.count || 0;

  return (
    <li className={styles.dessert}>
      <picture>
        <source media="(max-width: 425px)" srcSet={dessert.image.mobile} />
        <source media="(min-width: 768px)" srcSet={dessert.image.tablet} />
        <source media="(min-width: 1024px)" srcSet={dessert.image.desktop} />
        <img
          className={styles.dessert__image}
          src={dessert.image.desktop}
          alt={dessert.name}
        />
      </picture>
      {count < 1 ? (
        <AddToCartBtn dessert={dessert} />
      ) : (
        <IncrementDecrementBtn dessert={dessert} count={count} />
      )}
      <article className={styles.dessert__text}>
        <h2 className={`${styles.dessert__category} para-2`}>
          {dessert.category}
        </h2>
        <p className={`${styles.dessert__name} para-1`}>{dessert.name}</p>
        <p className={`${styles.dessert__price} para-1`}>
          ${dessert.price.toFixed(2)}
        </p>
      </article>
    </li>
  );
}

export default DessertItem;
