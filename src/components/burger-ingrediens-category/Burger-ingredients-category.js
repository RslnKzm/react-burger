import styles from './Burger-ingredients-category.module.css';
import BurgerIngredientsCard from '../burger-ingredients-card/Burger-ingredients-card';

const BurgerIngredientsCategory=(props)=> {
    return(
        <section>
            <h2 className="pl-1 mt-10 mb-6">
                {props.heading}
            </h2>
            <ul className={styles.burger_ingredients_list + ' ml-4 mt-6 mr-2 mb-10'}>
                {props.items.map((item) => 
                    <BurgerIngredientsCard name={item.name} price={item.price} image={item.image} value={item.__v} key={item._id}/>
                )}
            </ul>
        </section>
    );
}

export default BurgerIngredientsCategory;
