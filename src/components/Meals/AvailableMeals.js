import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chicken Kosha",
    description: "Classic dry chicken curry!",
    price: 250,
  },
  {
    id: "m2",
    name: "Shahi Paneer",
    description: "Rich Mughlai dish!",
    price: 200,
  },
  {
    id: "m3",
    name: "Biryani",
    description: "A spiced mix of meat and rice!",
    price: 220,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 160,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
