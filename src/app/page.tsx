import styles from "@/app/page.module.css";
import Button from "@/components/Button/Button";
import ClientActions from "@/components/ClientActions/ClientActions";
import Container from "@/components/Container/Container";
import Table from "@/components/Table/Table";

export default function Home() {
  return (
    <main>
      <Container>
        <Table />
        <ClientActions />
      </Container>
    </main>
  );
}
