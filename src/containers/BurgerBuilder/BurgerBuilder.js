import React, {Component} from 'react';

import Wrapper from '../../wrapper/wrapper';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary'

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
    purchasable: false,
    purchasing: false
  }

  cancelPurchasing = () => {
    this.setState({purchasing: false});
  }
  updatePurchasing = () => {
    this.setState({purchasing: true});
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
        <Modal showModal={this.state.purchasing} hideModal = {this.cancelPurchasing}>
          <OrderSummary ingredients={this.state.ingredients} cancelPurchase = {this.cancelPurchasing} price={this.state.totalPrice}/>
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BurgerControls
          addMoreIngredients={this.addIngrdientsHandler}
          removeMoreIngredients={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          canPurchase={this.state.purchasable}
          updatePurchasing={this.updatePurchasing}/>
      </Wrapper>
    );
  }
}
export default BurgerBuilder;