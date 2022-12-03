import data  from '../../utils/data.js'
import AppHeader from '../app-header/App-header.js';
import BurgerConstructor from '../burger-constructor/Burger-constructor';
import BurgerIngredients from '../burger-ingredients/Burger-ingredients';
import styles from './App.module.css';




const App =()=> {
  return (
    <>
      <AppHeader />
      <div className={styles.container}>
        <section className={styles.container_left + ' mr-5'}>
          <BurgerIngredients items={data}/>
        </section>
        <section className={styles.container_right + ' ml-5'}>
          <BurgerConstructor items={data} />
        </section>
      </div>
    </>
  );
}

export default App;
