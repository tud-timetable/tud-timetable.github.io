import {
  Fragment
} from "react";

import ModalBackdrop from "./ModalBackdrop";

function Modal({
  hidden = false,
  size = null,
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
      <ModalBackdrop hidden={ hidden } />
    </Fragment>
  );
}

export default Modal;
