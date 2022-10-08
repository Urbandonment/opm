import React from 'react';
import Home from './home';
import BlackTicket from './black-ticket';
import LineUpCreator from './lineup-creator';

function Content(props) {
  if (props.page === 'Home') {
    return <Home />;
  }
  if (props.page === 'Black Ticket Calculation') {
    return <BlackTicket />;
  }
  if (props.page === 'Line-Up Creator') {
    return <LineUpCreator />;
  }
}

export default Content;
