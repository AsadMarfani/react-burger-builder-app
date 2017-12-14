import React from 'react';
import Wrapper from '../../wrapper/wrapper';
import Button from '../UI/Button/Button'

const orderSummary = (props) => {
  const ingredientSummary = Object
    .keys(props.ingredients)
    .map(igKey => {
      return <li key = {igKey}>
        <span style = {{textTransform : 'capitalize'}}>{igKey}</span>
        : {props.ingredients[igKey]}</li>
    });
  return (
    <Wrapper>
      <h3>Your order</h3>
      <p>A delicious burger with the following categories</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price  : {"$"+props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button clicked = {props.cancelPurchase} btnType = {"Danger"}>CANCEL</Button>
      <Button btnType = {"Success"}>CONTINUE</Button>
    </Wrapper>
  );
}

export default orderSummary;