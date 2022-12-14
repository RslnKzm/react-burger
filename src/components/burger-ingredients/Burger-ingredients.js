import React from 'react';
import PropTypes from 'prop-types';
import BurgerIngredientsCategory from '../burger-ingrediens-category/Burger-ingredients-category';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Burger-ingredients.module.css';


const BurgerIngredients=(props)=>{
    const [current, setCurrent] = React.useState('bun')
    return(
        <>
            <h1 className="mt-10 mb-5">
                Соберите бургер
            </h1>
            <div className={styles.tab_selector}>
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={styles.scroll_container}>
                <BurgerIngredientsCategory heading="Булки" items={props.items.filter(item => item.type === 'bun')} />
                <BurgerIngredientsCategory heading="Соусы" items={props.items.filter(item => item.type === 'sauce')} />
                <BurgerIngredientsCategory heading="Начинки" items={props.items.filter(item => item.type === 'main')} />
            </div>
        </>
    );
}

BurgerIngredients.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired
    }).isRequired).isRequired
};

export default BurgerIngredients;
