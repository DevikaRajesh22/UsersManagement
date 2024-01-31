import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ConfirmModal({modal,closeModal,deleteUser}) {
  return (
    <div className={`${modal?'d-flex':'d-none'} justify-content-center align-items-center bg-dark z-3`} style={{height:'100vh'}}>
      <div
        className="modal show bg-dark bg-opacity-50"
        style={{ display: "block", position: "fixed", zIndex: 5 }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton onClick={()=>closeModal()}>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={()=>closeModal()}>Close</Button>
            <Button variant="primary" onClick={()=>deleteUser()}>delete</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  );
}

export default ConfirmModal;