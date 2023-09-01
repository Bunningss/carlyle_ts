import styles from "@/components/Table/Table-header/Table-header.module.css";

const TableHeader = () => {
  return (
    <tr className={styles.tableRow}>
      <td className={styles.tableHeader}>Name</td>
      <td className={styles.tableHeader}>Enrollment Date</td>
      <td className={styles.tableHeader}>Approx End</td>
      <td className={styles.tableHeader}>Fees</td>
      <td className={styles.tableHeader}>Schedule</td>
      <td className={styles.tableHeader}>slot</td>
      <td className={styles.tableHeader}>batch number</td>
      <td className={styles.tableHeader}>status</td>
    </tr>
  );
};

export default TableHeader;
