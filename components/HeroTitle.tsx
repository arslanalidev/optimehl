import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import {
    Card, Container, Grid, Text, Title,
    Image, Badge, Button, Group, Space
} from '@mantine/core'
import React from 'react'

export function HeroTitle() {
    const router = useRouter()


    return (
        <Container mb={40} mih={"80vh"}>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Title order={1} align="center" mt={"5vh"}>Bäckerei{" "}
                    <Text component="span" variant="gradient" gradient={{ from: "#FF0000", to: "#FF7878" }}>
                        Spontan
                    </Text>
                </Title>
            </motion.div>

            <Space h={60} />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
            >
                <Grid gutter={"xl"}>
                    <Grid.Col xs={12} md={6} lg={4}>
                        <Card shadow="sm" p={1} radius="md" withBorder>
                            <Card.Section>
                                <Image
                                    src="/people.png"
                                    height={160}
                                    alt="Norway"
                                    fit="contain"
                                />
                            </Card.Section>

                            <Text pt={10} weight={500} align="center">Personalplanung</Text>

                            <Text size="sm" color="dimmed" align="center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                            </Text>

                            <Button variant="light" color="red" fullWidth mt="md" radius="md">
                                Jetzt planen
                            </Button>
                        </Card>
                    </Grid.Col>

                    <Grid.Col xs={12} md={6} lg={4}>
                        <Card shadow="sm" p={1} radius="md" withBorder>
                            <Card.Section>
                                <Image
                                    src="/people.png"
                                    height={160}
                                    alt="Norway"
                                    fit="contain"
                                />
                            </Card.Section>

                            <Text pt={10} weight={500} align="center">Personalplanung</Text>

                            <Text size="sm" color="dimmed" align="center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                            </Text>

                            <Button variant="light" color="red" fullWidth mt="md" radius="md">
                                Jetzt planen
                            </Button>
                        </Card>
                    </Grid.Col>

                    <Grid.Col xs={12} md={6} lg={4}>
                        <Card shadow="sm" p={1} radius="md" withBorder>
                            <Card.Section>
                                <Image
                                    src="/people.png"
                                    height={160}
                                    alt="Norway"
                                    fit="contain"
                                />
                            </Card.Section>

                            <Text pt={10} weight={500} align="center">Personalplanung</Text>

                            <Text size="sm" color="dimmed" align="center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                            </Text>

                            <Button variant="light" color="red" fullWidth mt="md" radius="md">
                                Jetzt planen
                            </Button>
                        </Card>
                    </Grid.Col>
                </Grid>
            </motion.div>

        </Container>
    );
}