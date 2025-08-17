import styles from "./FoodInput.module.css";
const FoodInput = () => {
  const handleOnChange = (event) => console.log(event.target.value);
  return (
    <input
      type="text"
      placeholder="Enter Food Items here"
      className={styles.foodInput}
      onChange={(event) => handleOnChange(event)}
    />
  );
};
export default FoodInput;
