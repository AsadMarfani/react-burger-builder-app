import React from 'react';
import classes from './Layout.css';
import Wrapper from '../../wrapper/wrapper';
const layout = (props) => (
  <Wrapper>
    <div>
      Toolbar, Sidedrawer, Backdrop
    </div>
    <main className = {classes.Content}>
      {props.children}
    </main>
  </Wrapper>
);
export default layout