// src/pages/SomePage.js
import Modal from '../components/Modal';

const SomePage = () => {
  return (
    <Modal
      title={<h2>Modal Title</h2>}
      content={<p>This is the modal content.</p>}
      footer={<button>Close</button>}
    />
  );
};

export default SomePage;