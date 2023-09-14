import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import style from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';


const Header = (props) => {

    return <Fragment>
        <header className={style.header}>
            <h1>Available Meals</h1>
            <HeaderCartButton />
        </header>
        <div className={style['main-image']}>
            <img src={mealsImage} alt="food table" />
        </div>
    </Fragment>
}

export default Header;