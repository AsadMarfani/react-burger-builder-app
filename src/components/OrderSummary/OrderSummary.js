import React from 'react';
import Wrapper from '../../wrapper/wrapper';

const orderSummary = (props) => {
  const ingredientSummary = Object
    .keys(props.ingredients)
    .map(igKey => {
      return <li>
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
      <p>Continue to checkout?</p>
    </Wrapper>
  );
}

export default orderSummary;