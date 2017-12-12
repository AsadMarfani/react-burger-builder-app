import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger'
import Wrapper from '../../wrapper/wrapper';
class BurgerBuilder extends Component {
  render() {
    return (
      <Wrapper>
        <Burger/>
        <div>Burger Controls</div>
      </Wrapper>
    );
  }
}
export default BurgerBuilder;