import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Wrapper from '../../wrapper/wrapper';
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  }
  render() {
    return (
      <Wrapper>
        <Burger ingredients={this.state.ingredients}/>
        <BurgerControls/>
      </Wrapper>
    );
  }
}
export default BurgerBuilder;