import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import { Container, Grid, Text, Title } from '@mantine/core'
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

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
            >
                <Grid>
                    <Grid.Col xs={12} md={6} lg={4}>
                        <Text>Hello</Text>
                    </Grid.Col>
                    <Grid.Col xs={12} md={6} lg={4}>
                        <Text>Hello</Text>
                    </Grid.Col>
                    <Grid.Col xs={12} md={6} lg={4}>
                        <Text>Hello</Text>
                    </Grid.Col>
                </Grid>
            </motion.div>

        </Container>
    );
}