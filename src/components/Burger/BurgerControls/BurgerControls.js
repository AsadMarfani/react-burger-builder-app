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
    {controls.map((ctrl) => {
      return <BurgerControl key={ctrl.label} label={ctrl.label}/>
    })}
  </div>
)

export default BurgerControls;