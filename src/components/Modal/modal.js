import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const MyVerticallyCenteredModal = (props) => {
  const { show } = props;
  return (
    <Modal
      show={show}
      size="lg"
      onHide={() => props.onHide(false)}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Register</Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default MyVerticallyCenteredModal;
