import React from 'react';

const GiftWrapMessage = ({message: string= "", onChange, maxChars: number = 300}= props) => {
  const getCharsLeft: number = () => {
    const charsLeft = (props.maxChars - props.message.length);
    return Math.floor(charsLeft) >= 0 ? charsLeft : 0;
  };
  console.log(props.message)

  return (
    <section>
      <textarea defaultValue={props.message} onBlur={props.onChange}></textarea>
      <p>Nog {getCharsLeft()} tekens over.</p>
    </section>
)};

GiftWrapMessage.propTypes = {
  message: React.PropTypes.string,
  onchange: React.PropTypes.func,
};


export default GiftWrapMessage;
