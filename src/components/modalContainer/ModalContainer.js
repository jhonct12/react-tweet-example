import "./ModalContainer.scss";

import { Modal } from "@mui/material";

export default ({ isOpenModal, closeModal, children }) => {
  return (
    <Modal
      className="modal-container"
      open={isOpenModal}
      onClose={closeModal}
      closeAfterTransition
    >
      <div>{children}</div>
    </Modal>
  );
};
