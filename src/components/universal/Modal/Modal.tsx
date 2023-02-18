import { useClickOutside } from "@src/hooks/useClickOutside";
import clsx from "clsx";
import React, { PropsWithChildren, useLayoutEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Typography from "../Typography/Typography";
import s from "./Modal.module.scss";

const TRANSITION_CLASSNAMES = {
  enter: s.enter,
  enterActive: s.enterActive,
  enterDone: s.enterDone,
  exit: s.exit,
  exitActive: s.exitActive,
};

interface ModalProps {
  open: boolean;
  onClose: () => void;
  className?: string;
  duration?: number;
  title?: string;
}

const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
  className,
  children,
  open,
  onClose,
  duration = 300,
  title,
}) => {
  const [modal, setModal] = useState<HTMLDivElement | null>(null);

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

  useClickOutside(modal, onClose, "mousedown");

  return (
    <CSSTransition
      in={open}
      unmountOnExit
      mountOnEnter
      timeout={duration}
      classNames={TRANSITION_CLASSNAMES}
    >
      <div className={s.overlay} style={{ transitionDuration: `${duration}ms` }}>
        <div className={clsx(s.modal, className)} ref={setModal}>
          <div className={s.wrapper}>
            {!!title && (
              <Typography variant="title" className={s.title}>
                {title}
              </Typography>
            )}
            {children}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
