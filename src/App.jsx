import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";

function App() {
  // "Egg", "Green Vegetable", "Mutton", "Fish", "Milk"
  let foodItems = ["Egg", "Green Vegetable", "Mutton", "Fish", "Milk", "Roti"];
  return (
    <>
      <Container>
        <h1 className="foodHeading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      {/* <Container>
        <p>Above is the of healthy foods that your health and well being.</p>
      </Container> */}
    </>
  );
}

export default App;
