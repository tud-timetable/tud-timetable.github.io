import {
  useModalContext
} from "./ModalContext";

function ModalHeader({
  title
}) {
  const { onClose } = useModalContext();

  return (
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel">{ title }</h5>
      <button type="button" className="close" onClick={ onClose } aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default ModalHeader;
