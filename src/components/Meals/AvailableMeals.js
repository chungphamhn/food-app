import MealItem from './SingleMeal/MealItem';
import Card from '../UI/Card';
import style from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailableMeals = () => {

    const mealList = DUMMY_MEALS.map((meal) => {
        return <MealItem
            key={meal.id}
            meal={meal}
        />
    });

    return (
        <section className={style.meals}>
            <Card>
                <ul>
                    {mealList}
                </ul>
            </Card>

        </section>
    );
};

export default AvailableMeals;