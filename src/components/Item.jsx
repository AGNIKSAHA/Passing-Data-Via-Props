import styles from "./Item.module.css";

const Item = (props) => {
  const handledBuyButtonClicked = (footItems) => {
    console.log(`${foodItems} being bought`);
  };
  let { foodItems } = props;
  return (
    <li className={`${styles["items"]} list-group-item items`}>
      <span>{foodItems}</span>
      <button
        className={`${styles.button} btn btn-warning`}
        onClick={() => handledBuyButtonClicked(foodItems)}
      >
        buy
      </button>
    </li>
  );
};

export default Item;
