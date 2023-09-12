import { Fragment } from 'react';
import Cart from '../Cart/Cart';
import mealImage from '../assets/meals.jpg';
import style from './Header.module.css';

const Header = () => {

    return (
        <Fragment>
            <header className={style.header}>
                <Cart />
                <h2>Our Meals</h2>
            </header>
            <div className={style['main-image']}>
                <img src={mealImage} alt='Our delicous meals' />
            </div>
            <div>
                <h2>Delicious Food, Delivered To You</h2>
                <p>Choose your favorite meal from our board selection of
                    available meals and enjoy a delicious lunch or dinner at home
                </p>
                <p>All our meals are cooked with high-quality ingredients,
                    just-in-time and of course by experience chefs!
                </p>
            </div>
        </Fragment>

    );
};

export default Header;