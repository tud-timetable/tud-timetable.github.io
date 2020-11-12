function ModalBackdrop({
  hidden = false
}) {
  if ( hidden ) {
    return null;
  }

  return (
    <div className="modal-backdrop show"></div>
  );
}

export default ModalBackdrop;
