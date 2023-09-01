import styles from "@/app/page.module.css";
import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import Table from "@/components/Table/Table";

export default function Home() {
  return (
    <main>
      <Container>
        <Table />
        <Button label="add new" size="medium" margin="10px 0" />
      </Container>
    </main>
  );
}
