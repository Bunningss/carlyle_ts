import styles from "@/components/Table/Table-row/Table-row.module.css";
import Link from "next/link";

const TableRow = () => {
  return (
    <tr className={styles.tableRow}>
      <td className={styles.tableData}>
        <Link href={`student/profile/id`}>Ibrahim Khalil</Link>
      </td>
      <td className={styles.tableData}>22 Jan 2022</td>
      <td className={styles.tableData}>11 March 2023</td>
      <td className={styles.tableData}>15,000 tk</td>
      <td className={styles.tableData}>
        <Link href="">Sat, Mon, Wed</Link>
      </td>
      <td className={styles.tableData}>9:00 - 11:00 PM</td>
      <td className={styles.tableData}>
        <Link href="">void</Link>
      </td>
      <td className={styles.tableData}>
        <Link href="">active</Link>
      </td>
    </tr>
  );
};

export default TableRow;
