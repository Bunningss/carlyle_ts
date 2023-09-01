import styles from "@/components/Table/Table.module.css";
import TableHeader from "./Table-header/Table-header";
import TableRow from "./Table-row/Table-row";

const Table = () => {
  return (
    <table className={styles.table}>
      <tbody>
        <TableHeader />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </tbody>
    </table>
  );
};

export default Table;
