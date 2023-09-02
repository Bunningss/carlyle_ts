"use client";
import styles from "@/components/Modal/Modal.module.css";
import { useCallback, useEffect, useState } from "react";
import Container from "../Container/Container";
import Image from "next/image";
import close from "@/images/close.png";
import Button from "../Button/Button";
import useNewStudentModal from "@/hooks/useNewStudentModal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  disabled,
}) => {
  const [showModal, setShowModal] = useState(false);
  const newStudentModal = useNewStudentModal();

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }),
      300;
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className={styles.modal}></div>
      {/* Modal Content */}
      <div className={styles.modalContentWrapper}>
        <div className={styles.modalContent}>
          <div className={styles.headerContentWrapper}>
            <Image
              src={close}
              alt=""
              className={styles.closeButton}
              onClick={handleClose}
            />
            <h2 className={styles.headerText}>{title}</h2>
          </div>
          <Container>
            {/* Header */}
            <div>{body}</div>
            <Button
              label="Save Data"
              margin="0"
              secondary
              onClick={newStudentModal.onClose}
            />
          </Container>
        </div>
      </div>
    </>
  );
};

export default Modal;
