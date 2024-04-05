import MealItem from '../meal-item';
import classes from './MealsGrid.module.css';


type Meal = {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
  id: string;
};

type Props = {
  meals: Meal[];
};

export default function MealsGrid({ meals }: Props) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}