import PropTypes from 'prop-types';
import styles from './Menu-item.module.css';
const MenuItem=(props)=>{
    return(
        <div className={styles.elem+
            ' pl-5 pr-5 pt-4 pb-4 mt-4 mb-4 mr-2' +
           (props.active ? styles.menu_item_active : null)}>
                <div className={styles.icon}>
                    {props.icon}
                </div>
                <p className="text text_type_main-default">{props.text}</p>
        </div>
        
    );
}

MenuItem.propTypes = {
    active: PropTypes.bool,
    text: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired
};

export default MenuItem;