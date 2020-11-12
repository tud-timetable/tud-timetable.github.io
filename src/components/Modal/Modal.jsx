import {
  Fragment
} from "react";

import ModalBackdrop from "./ModalBackdrop";
import ModalContext from "./ModalContext";

function noop() {}

function Modal({
  hidden = false,
  size = null,
  onClose = noop,
  children
}) {
  const modalClassNames = [
    "modal",
    "show",
  ];

  const dialogClassNames = [
    "modal-dialog",
    "modal-dialog-scrollable",
  ];

  if ( !hidden ) {
    modalClassNames.push( "d-block" );
  }

  switch ( size ) {
    case "sm":
      dialogClassNames.push( "modal-sm" );
      break;

    case "lg":
      dialogClassNames.push( "modal-lg" );
      break;

    case "xl":
      dialogClassNames.push( "modal-xl" );
      break;
  }

  return (
    <Fragment>
      <ModalContext.Provider value={{ onClose }}>
        <div
          className={ modalClassNames.join( " " ) }
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden={ hidden ? "true" : "false" }
        >
          <div className={ dialogClassNames.join( " " ) }>
            <div className="modal-content">
              { children }
            </div>
          </div>
        </div>
      </ModalContext.Provider>
      <ModalBackdrop hidden={ hidden } onClick={ onClose } />
    </Fragment>
  );
}

export default Modal;
