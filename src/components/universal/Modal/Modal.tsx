import clsx from "clsx";
import React, { PropsWithChildren, useLayoutEffect } from "react";
import ReactModal from "react-modal";
import Typography from "../Typography/Typography";
import s from "./Modal.module.scss";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  closeOnOverlayClick?: boolean;
  className?: string;
  duration?: number;
  title?: string;
}

const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
  className,
  children,
  open,
  onClose,
  duration = 400,
  closeOnOverlayClick = true,
  title,
}) => {
  useLayoutEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <ReactModal
      isOpen={open}
      shouldCloseOnOverlayClick={closeOnOverlayClick}
      closeTimeoutMS={duration}
      overlayClassName={s.overlay}
      onRequestClose={onClose}
      className={clsx(s.modal, className)}
      ariaHideApp={false}
      style={{ overlay: { transitionDuration: `${duration}ms` } }}
    >
      <div className={s.wrapper}>
        {!!title && (
          <Typography variant="title" className={s.title}>
            {title}
          </Typography>
        )}
        {children}
      </div>
    </ReactModal>
  );
};

export default Modal;
