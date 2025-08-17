import styles from "./Item.module.css";

const Item = (props) => {
  let { foodItems } = props;
  return (
    <li className={`${styles["items"]} list-group-item items`}>
      <span>{foodItems}</span>
      <button
        className={`${styles.button} btn btn-warning`}
        onClick={() => console.log(`Buy ${foodItems}`)}
      >
        buy
      </button>
    </li>
  );
};

export default Item;
