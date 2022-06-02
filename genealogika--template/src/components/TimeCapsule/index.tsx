import { api } from "../../services/api";
import { Button, Form } from "react-bootstrap";
import styles from "./styles.module.scss";
import { FormEvent, useState } from "react";
export function TimeCapsule() {
  const [color, setColor] = useState("");
  const [spirit, setSpirit] = useState("");
  const [animal, setAnimal] = useState("");
  const [number, setNumber] = useState("");

  const subject = "Cápsula do Tempo Genealogika";

  async function handleTimeCapsule(event: FormEvent) {
    event.preventDefault();

    const userId = await api.get("id-from-token", {});

    const receiverEmail = await api.post("user-email", { user_id: userId });

    const body = `Olá aqui está a tua Cápsula do Tempo.\n\nCor preferida: ${color}\nAnimal Espiritual: ${spirit}\nAnimal Preferido: ${animal}\nNúmero Preferido: ${number}\n\n\nGenealogika`;

    await api.post("email", {
      receiverEmail,
      subject,
      body,
    });
  }

  return (
    <div className={styles.wrapper}>
      <Form>
        <Form.Group className={styles.formInput} controlId="formBasicFavColor">
          <Form.Label>Cor Preferida</Form.Label>
          <Form.Control
            type="text"
            placeholder="Cor Preferida"
            onChange={(event) => setColor(event.target.value)}
            value={color}
          />
          {
            //<Form.Text className="text-muted">
            //We'll never share your email with anyone else.
            //</Form.Text>
          }
        </Form.Group>

        <Form.Group
          className={styles.formInput}
          controlId="formBasicSpiritAnimal"
        >
          <Form.Label>Animal Espiritual</Form.Label>
          <Form.Control
            type="text"
            placeholder="Animal Espiritual"
            onChange={(event) => setSpirit(event.target.value)}
            value={spirit}
          />
        </Form.Group>
        {
          //<Form.Group className="mb-3" controlId="formBasicCheckbox">
          //<Form.Check type="checkbox" label="Check me out" />
          //</Form.Group>
        }

        <Form.Group
          className={styles.formInput}
          controlId="formBasicPrefAnimal"
        >
          <Form.Label>Animal Preferido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Animal Preferido"
            onChange={(event) => setAnimal(event.target.value)}
            value={animal}
          />
        </Form.Group>

        <Form.Group
          className={styles.formInput}
          controlId="formBasicPrefNumber"
        >
          <Form.Label>Número Preferido</Form.Label>
          <Form.Control
            type="number"
            placeholder="Número Preferido"
            onChange={(event) => setNumber(event.target.value)}
            value={number}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className={styles.formButton}>
          Submit
        </Button>
      </Form>
    </div>
  );
}