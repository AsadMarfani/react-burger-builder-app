import React from 'react';
import classes from './NavigationItems.css';
import NavugationItem from './NavigationItem/NavigationItem';
const navigationItems = (props) => (
  <ul className = {classes.NavigationItems}>
    <NavugationItem link="/" active>Burger Builder</NavugationItem>
    <NavugationItem link="/">Checkout</NavugationItem>
  </ul>
);

export default navigationItems;