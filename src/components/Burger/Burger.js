import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
const burger = (props) => {
  let transformedIngredients = Object
    .keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, index) => {
        return <BurgerIngredients key={index + igKey} type={igKey}/>;
      })
    })
    .reduce((acc, curr) => {
      return acc.concat(curr);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>
  }
  console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type={'bread-top'}/>
        {transformedIngredients}
      <BurgerIngredients type={'bread-bottom'}/>
    </div>
  );
}

export default burger;