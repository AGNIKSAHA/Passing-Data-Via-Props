import styles from "./Item.module.css";

const Item = ({ foodItems, handledBuyButtonClicked }) => {
  // const handledBuyButtonClicked = (footItems) => {
  //   console.log(`${foodItems} being bought`);
  // };
  return (
    <li className={`${styles["items"]} list-group-item items`}>
      <span>{foodItems}</span>
      <button
        className={`${styles.button} btn btn-warning`}
        onClick={handledBuyButtonClicked}
      >
        buy
      </button>
    </li>
  );
};

export default Item;
