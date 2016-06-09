import React, { Component } from 'react';
import { setgiftCardMessage, togglegiftCard } from './actions/giftCard';
import { connect } from 'react-redux';
import GiftWrapMessage from './components/giftwrapMessage';

const App = () => {
  return (
    <div>
      <GiftWrapMessage></GiftWrapMessage>
    </div>
  );
};



export default connect(state => state.giftWrap)(App);
