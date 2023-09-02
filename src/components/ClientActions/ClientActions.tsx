"use client";
import styles from "@/components/ClientActions/ClientActions.module.css";
import Button from "../Button/Button";
import useNewStudentModal from "@/hooks/useNewStudentModal";

const ClientActions = () => {
  const newStudentModal = useNewStudentModal();

  return (
    <div>
      <Button
        label="add new"
        medium
        margin="10px 0"
        onClick={newStudentModal.onOpen}
      />
    </div>
  );
};

export default ClientActions;
