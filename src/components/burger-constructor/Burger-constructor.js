import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Burger-constructor.module.css';


const BurgerConstructor=(props)=> {
    const ingredientData=[...props.items];
    const topIngredientData = ingredientData.shift();
    const bottomIngredientData = ingredientData.pop();
    return(
        <>
            <div className={styles.burger_constructor_list + ' ml-4 mt-25 mb-10 pr-4'}>
                <div className='pl-8' key="top_bun">
                    <ConstructorElement 
                                    type='top'
                                    isLocked={true}
                                    text={topIngredientData.name + ' (верх)'}
                                    thumbnail={topIngredientData.image}
                                    price={topIngredientData.price}
                                />
                </div>
                <div className={styles.burger_constructor_draggable_list + ' pr-2'} key="middle_items">
                    {ingredientData.map((item, index) => (
                        <div key={item._id + '_' + index} className={'mt-2 mb-2'}>
                            <span className={styles.burger_constructor_drag_icon}>
                                <DragIcon type='primary' />
                            </span>
                            <ConstructorElement 
                                text={item.name}
                                thumbnail={item.image}
                                price={item.price}
                                />
                        </div>
                    ))}
                </div>
                <div className='pl-8' key="bottom_bun">
                    <ConstructorElement 
                                    isLocked={true}
                                    type='bottom'
                                    text={bottomIngredientData.name + ' (низ)'}
                                    thumbnail={bottomIngredientData.image}
                                    price={bottomIngredientData.price}
                                />
                </div>
            </div>
            <div className={styles.burger_constructor_order + ' mr-4 mb-10'}>
                <p className="text text_type_digits-medium">
                        {topIngredientData.price + ingredientData.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0) +bottomIngredientData.price}
                </p>
                <span className='ml-2 mr-10'>
                    <CurrencyIcon type="primary" />
                </span>
                <Button type="primary" size="medium">
                        Оформить заказ
                </Button>
            </div>
        </>
    );
}

BurgerConstructor.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired 
    }))
};

export default BurgerConstructor;
