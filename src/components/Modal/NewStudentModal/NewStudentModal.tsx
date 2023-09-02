"use client";
import Input from "@/components/Input/Input";
import Modal from "../Modal";
import styles from "./RegisterModal.module.css";
import useNewStudentModal from "@/hooks/useNewStudentModal";

const NewStudentModal = () => {
  const studentModal = useNewStudentModal();

  const studentModalFields = [
    {
      label: "Full Name",
      type: "text",
      required: true,
      minLength: 6,
      maxLength: 56,
    },
    {
      label: "Enrollment Date",
      type: "date",
      required: true,
      minLength: 6,
      maxLength: 56,
    },
    {
      label: "Approximate End",
      type: "date",
      required: true,
      minLength: 6,
      maxLength: 56,
    },
    {
      label: "Total Fees",
      type: "number",
      required: true,
      minLength: 6,
      maxLength: 56,
    },
    {
      label: "Fees paid",
      type: "number",
      required: true,
      minLength: 6,
      maxLength: 56,
    },
    {
      label: "Schedule",
      type: "text",
      required: true,
      minLength: 6,
      maxLength: 56,
    },
    {
      label: "Slot",
      type: "text",
      required: true,
      minLength: 6,
      maxLength: 56,
    },
    {
      label: "Batch Number",
      type: "text",
      required: true,
      minLength: 6,
      maxLength: 56,
    },
  ];

  const bodyContent = (
    <div className={styles.bodyContainer}>
      <form action="">
        {studentModalFields.map((field) => (
          <Input
            type={field.type}
            placeholder={field.label}
            required={field.required}
          />
        ))}
      </form>
    </div>
  );

  return (
    <div>
      <Modal
        isOpen={studentModal.isOpen}
        body={bodyContent}
        title="insert data"
        onClose={studentModal.onClose}
        onSubmit={studentModal.onClose}
      />
    </div>
  );
};

export default NewStudentModal;
