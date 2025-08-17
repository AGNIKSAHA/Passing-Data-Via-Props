import styles from "./Item.module.css";

const Item = (props) => {
  let { foodItems } = props;
  return (
    <li className={`${styles["items"]} list-group-item items`}>
      <span>{foodItems}</span>
    </li>
  );
};

export default Item;
