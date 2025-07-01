import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children, className = "", onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    // if (open) {
    //   dialog.current.showModal();
    // } else {
    //   dialog.current.close();
    // }
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog className={`modal ${className}`} ref={dialog} onClose={onClose}>
      {/* {{open ? children : null}} */}
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
