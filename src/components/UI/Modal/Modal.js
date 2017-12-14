import React from 'react';
// import Wrapper from '../../wrapper/wrapper';
import Wrapper from '../../../wrapper/wrapper';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';

const modal = (props) => (
  <Wrapper>
  <Backdrop show = {props.showModal} hide = {props.hideModal}/>
    <div
      className={classes.Modal}
      style={{
      transform: props.showModal
        ? 'translateY(0)'
        : 'translateY(-100vh)',
      opacity: props.showModal
        ? '1'
        : ''
    }}>
      {props.children}
    </div>
  </Wrapper>

);

export default modal;