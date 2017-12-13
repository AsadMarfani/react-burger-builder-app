import React from 'react';
// import Wrapper from '../../wrapper/wrapper';
import classes from './Modal.css';

const modal = (props) => (
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

);

export default modal;