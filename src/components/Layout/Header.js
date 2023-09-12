import { Fragment } from "react";
import style from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';


const Header = (props) => {

    return <Fragment>
        <header className={style.header}>
            <h1>Available Meals</h1>
            <button>Cart</button>
        </header>
        <div className={style['main-image']}>
            <img src={mealsImage} alt="food table" />
        </div>
    </Fragment>
}

export default Header;