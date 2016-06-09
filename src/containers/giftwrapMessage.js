import React from 'react';
import {connect} from 'react-redux';
import {togglegiftWrap, setgiftWrapMessage} from '../actions/giftCard';

function mapDispatchToProps(dispatch): Object {
  return {
    onClick: () => dispatch(togglegiftWrap()),
    onChange: (ev) => dispatch(setgiftWrapMessage(ev.target.value))
  };
}
function mapStateToProps(state: Object): Object {
  return { ...state.giftWrap}
}

function getCharsLeft(message: string): number {
  const charsLeft = (300 - message.length);
  const calc = Math.floor(charsLeft) >= 0 ? charsLeft : 0;
  return (<p>Nog {calc} tekens over.</p>)
};

const GiftWrapMessage = ({message, enabled, onClick, onChange}) => {
  return (
    <section>
      <label>
        <input type="checkbox" checked = {enabled} onClick = {onClick}></input>
        Ik wil de arikelen laten inpaken in inpakpapier.
      </label>
      <br></br>
      <textarea defaultValue = {message} onChange = {onChange}></textarea>
      <p>Nog {getCharsLeft(message)} tekens over.</p>
    </section>
)};

GiftWrapMessage.propTypes = {
  message: React.PropTypes.string.isRequired,
  enabled: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GiftWrapMessage);
