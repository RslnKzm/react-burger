import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import MenuItem from '../menu-item/Menu-item';
import styles from "./App-header.module.css";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.menu_list}>
            <section className={styles.menu_left}>
                <MenuItem icon={<BurgerIcon type="primary" />} text="Конструктор" active/>
                <MenuItem icon={<ListIcon type="secondary" />} text="Лента заказов"/>
            </section>
            <section className={styles.menu_logo}>
                <Logo />
            </section>
            <section className={styles.menu_right}>
                <MenuItem icon={<ProfileIcon type="secondary"/>} text="Личный кабинет"/>
            </section>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;