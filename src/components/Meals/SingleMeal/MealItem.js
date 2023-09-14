import AddQuantityForm from './AddQuantityForm';
import Card from '../../UI/Card';
import style from './MealItem.module.css';

const MealItem = (props) => {

    const price = `$${props.meal.price.toFixed(2)}`;
    return (
        <li className={style.meal}>
            <div className={style.test}>
                <div className={style.price}>
                    <div className={style.test2}>{props.meal.name}</div>
                    <div>{price}</div>
                </div>
                <div className={style.description}>{props.meal.description}</div>
            </div>
            <div><AddQuantityForm /></div>
        </li>
    );
};

export default MealItem;