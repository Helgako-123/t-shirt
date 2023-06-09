import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';


const Product = props => {
  const [currentColor, setCurrentColor] = useState([]);
 //const [currentSize, setCurrentSize] = useState([{}]);
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    let pointer = null;

    if(isActive) {
      pointer = setIsActive(() =>{
        setCurrentColor(isActive)
      })
    } else {
      clearColor(pointer);
    } 

    return () =>
       clearColor(pointer)
  }, [currentColor, isActive])


  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
        //  className={styles.image}
        //  alt="Kodilla shirt"
        //  src={`${process.env.PUBLIC_URL}/images/products/shirt-kodilla--black.jpg`} />
        className={styles.image}
        alt="Kodilla shirt"
        src={`${process.env.PUBLIC_URL}/images/products/shirt-kodilla--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>Kodilla shirt</h2>
          <span className={styles.price}>Price: 20$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              <li><button type="button" className={styles.active}>S</button></li>
              <li><button type="button">M</button></li>
              <li><button type="button">L</button></li>
              <li><button type="button">XL</button></li>
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              <li><button type="button" className={clsx(styles.colorBlack, styles.active && styles.isActive)} /></li>
              <li><button type="button" className={clsx(styles.colorRed, styles.active && styles.isActive)} /></li>
              <li><button type="button" className={clsx(styles.colorWhite, styles.active && styles.isActive)} /></li>
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  title: PropTypes.string,
  basePrice: PropTypes.number 
};


export default Product;