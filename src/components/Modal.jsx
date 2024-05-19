// src/components/Modal.js
import PropTypes from 'prop-types';

const Modal = ({ title, content, footer }) => {
  return (
    <div className="modal">
      <div className="modal-header">{title}</div>
      <div className="modal-content">{content}</div>
      <div className="modal-footer">{footer}</div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default Modal;