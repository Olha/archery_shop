import React from 'react';
// like popup
const Message = ({ title, subtitle }) => (
  <div className='wrapper-message'>
    {title ? <div className='title-message'>{title}</div> : null}
    {subtitle ? <div className='subtitle-message'>{subtitle}</div> : null}
  </div>
);

Message.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
};

export default Message;
