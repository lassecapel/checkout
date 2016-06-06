import React, { Component } from 'react';
import { setgiftCardMessage, togglegiftCard } from './actions/giftCard';
import { connect } from 'react-redux';
import GiftWrapMessage from './components/giftwrapMessage';

class App extends Component {
  onBlur(event) {
    this.props.dispatch(setgiftCardMessage(event.target.value))
  }
  onClick() {
    this.props.dispatch(togglegiftCard())
  }

  render() {
    console.log(this.props)
    const {message, enabled} = this.props;
    console.log('message', message);
    return (
      <div>
        <label>
          <input type="checkbox" checked = {enabled} onClick = {this.onClick.bind(this)}></input>
          Ik wil de arikelen laten inpaken in inpakpapier.
        </label>
        <br />
        <GiftWrapMessage message={message} onChange={ this.onBlur.bind(this) } ></GiftWrapMessage>
      </div>
    );
  }
}



export default connect(state => state.giftWrap)(App);
