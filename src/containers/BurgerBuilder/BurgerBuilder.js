import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Wrapper from '../../wrapper/wrapper';
const INGRDEINT_PRICES = {
  salad: 1.3,
  bacon: 2.4,
  cheese: 4,
  meat: 6.8
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false
  }

  upDatePurchaseState(ingredients) {
    const sum = Object
      .keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => {
        return sum + el
      }, 0);
    this.setState({
      purchasable: sum > 0
    });
  }

  addIngrdientsHandler = (type) => {
    //Added Ingredient Code
    let oldIngrdient = this.state.ingredients[type];
    let updatedIngredient = oldIngrdient + 1;
    let tranformedIngredient = {
      ...this.state.ingredients
    }
    tranformedIngredient[type] = updatedIngredient;

    //Added Price Code
    let oldPrice = this.state.totalPrice;
    let priceAddition = INGRDEINT_PRICES[type]
    let updatedPrice = oldPrice + priceAddition;
    this.setState({ingredients: tranformedIngredient, totalPrice: updatedPrice});
    this.upDatePurchaseState(tranformedIngredient);
  }
  removeIngredientHandler = (type) => {
    //Added Ingredient Code
    let oldIngrdient = this.state.ingredients[type];
    if (oldIngrdient <= 0) {
      return;
    }
    let updatedIngredient = oldIngrdient - 1;
    let tranformedIngredient = {
      ...this.state.ingredients
    }
    tranformedIngredient[type] = updatedIngredient;

    //Added Price Code
    let oldPrice = this.state.totalPrice;
    let priceSubtraction = INGRDEINT_PRICES[type]
    let updatedPrice = oldPrice - priceSubtraction;
    this.setState({ingredients: tranformedIngredient, totalPrice: updatedPrice});
    this.upDatePurchaseState(tranformedIngredient);
  }
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Wrapper>
        <Burger ingredients={this.state.ingredients}/>
        <BurgerControls
          addMoreIngredients={this.addIngrdientsHandler}
          removeMoreIngredients={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          canPurchase = {this.state.purchasable}/>
      </Wrapper>
    );
  }
}
export default BurgerBuilder;