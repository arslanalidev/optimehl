import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import {
  Card, Container, Grid, Text, Title,
  Image, Button, Space
} from '@mantine/core'
import React, { useContext } from 'react'
import { DatabaseContext } from "../contexts/DatabaseContext";

export default function Home() {
  const router = useRouter()
  const { setActivePage }: any = useContext(DatabaseContext)

  return (
    <Container mih={"80vh"} mt={"5vh"}>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title order={1} align="center" >Bäckerei{" "}
          <Text component="span" variant="gradient" gradient={{ from: "#FF0000", to: "#FF7878" }}>
            Spontan
          </Text>
        </Title>
      </motion.div>

      <Space h={70} />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeIn" }}
      >
        <Grid gutter={"xl"}>
          <Grid.Col xs={12} md={6} lg={4}>
            <Card shadow="sm" p={1} radius="md" withBorder>
              <Card.Section>
                <Image
                  src="/people.png"
                  height={160}
                  alt="Menschenmenge"
                  fit="contain"
                />
              </Card.Section>

              <Text pt={10} weight={500} align="center">Personalplanung</Text>

              <Text size="sm" color="dimmed" align="center">
                Mitarbeiter können ihren Dienstplan einsehen und Urlaub beantragen
              </Text>

              <Button
                variant="light" color="red" fullWidth mt="md" radius="md"
                onClick={() => {
                  router.push("/personal")
                  setActivePage("/personal")
                }}
              >
                Personal planen
              </Button>
            </Card>
          </Grid.Col>

          <Grid.Col xs={12} md={6} lg={4}>
            <Card shadow="sm" p={1} radius="md" withBorder>
              <Card.Section>
                <Image
                  src="/production.png"
                  height={160}
                  alt="Produktion"
                  fit="contain"
                />
              </Card.Section>

              <Text pt={10} weight={500} align="center">Produktionsleitung</Text>

              <Text size="sm" color="dimmed" align="center">
                Planung welche Produkte wann produziert werden sollen
              </Text>

              <Button
                variant="light" color="red" fullWidth mt="md" radius="md"
                onClick={() => {
                  router.push("/produktionsleitung")
                  setActivePage("/produktionsleitung")
                }}
              >
                Produktion planen
              </Button>
            </Card>
          </Grid.Col>

          <Grid.Col xs={12} md={6} lg={4}>
            <Card shadow="sm" p={1} radius="md" withBorder>
              <Card.Section>
                <Image
                  src="/lager.png"
                  height={160}
                  alt="Lager"
                  fit="contain"
                />
              </Card.Section>

              <Text pt={10} weight={500} align="center">Lagerwesen</Text>

              <Text size="sm" color="dimmed" align="center">
                Bestandverwaltung und Planung der Bestellungen
              </Text>

              <Button
                variant="light" color="red" fullWidth mt="md" radius="md"
                onClick={() => {
                  router.push("/lagerwesen")
                  setActivePage("/lagerwesen")
                }}
              >
                Waren bestellen
              </Button>
            </Card>
          </Grid.Col>
        </Grid>
      </motion.div>
    </Container>
  );
}
