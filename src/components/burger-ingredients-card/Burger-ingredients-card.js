import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Burger-ingrediens-card.module.css';

const BurgerIngredientsCard=(props)=>{
    return(
        <li className={styles.ingredient_card}>
            {props.value ? <Counter count={props.value}/> : null}
            <img src={props.image} alt={props.name} title={props.name} className="ml-4 mr-4"/>
                <div className={styles.ingredient_price + ' mt-1 mb-1'}>
                    <p className='pr-2'>{props.price}</p>
                    <CurrencyIcon />
                </div>
            <p className={styles.ingredient_name + ' text text_type_main-default'}>
                {props.name}
            </p>
        </li>
    );
}



export default BurgerIngredientsCard;