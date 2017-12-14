import React from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import Wrapper from '../../wrapper/wrapper';
const layout = (props) => (
  <Wrapper>
    <Toolbar/>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Wrapper>
);
export default layout