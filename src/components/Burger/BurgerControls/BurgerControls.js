import React from 'react';
import classes from './BurgerControls.css';
import BurgerControl from './BurgerControl/BurgerControl';

const controls = [
  {
    label: "Salad",
    type: "salad"
  }, {
    label: "Bacon",
    type: "bacon"
  }, {
    label: "Cheese",
    type: "cheese"
  }, {
    label: "Meat",
    type: "meat"
  }
]
const BurgerControls = (props) => (
  <div className={classes.BurgerControls}>
  <p>Current Price : <strong>{"$"+props.price.toFixed(2)}</strong></p>
    {controls.map((ctrl) => {
      return <BurgerControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.addMoreIngredients(ctrl.type)}
        removed={() => props.removeMoreIngredients(ctrl.type)}
        disabled={props.disabled[ctrl.type]}/>
    })}
    <button
      className = {classes.OrderButton}
      disabled = {!props.canPurchase}>
      ORDER NOW
    </button>
  </div>
)

export default BurgerControls;