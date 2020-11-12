import {
  Fragment
} from "react";

import ModalBackdrop from "./ModalBackdrop";

function Modal({
  hidden = false,
  size = null,
  children
}) {
  const classNames = [
    "modal",
    "show",
  ];

  if ( !hidden ) {
    classNames.push( "d-block" );
  }

  switch ( size ) {
    case "sm":
      classNames.push( "modal-sm" );
      break;

    case "lg":
      classNames.push( "modal-lg" );
      break;

    case "xl":
      classNames.push( "modal-xl" );
      break;
  }

  return (
    <Fragment>
      <div
        className={ classNames.join( " " ) }
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden={ hidden ? "true" : "false" }
      >
        <div className="modal-dialog modal-dialog-scrollable">
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
