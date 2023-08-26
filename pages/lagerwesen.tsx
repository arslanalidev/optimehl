import React from 'react'
import { motion } from "framer-motion";
import {
    Container, Space, Title
} from '@mantine/core'
import { IngredientTable } from '../components/IngredientTable';

const Lagerwesen = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >

            <Container mih={"80vh"} mt={"5vh"}>

                <Title order={2} mb={"lg"} align="center">Lagerwesen</Title>

                <IngredientTable data={[
                    {
                        "id": "1",
                        "ingredient": "Weißmehl Type 550",
                        "ist": "100 kg",
                        "soll": "2000 kg",
                        "buy": "1900 kg",
                        "lowcolor": "red"
                    },
                    {
                        "id": "2",
                        "ingredient": "Roggenmehl Type 997",
                        "ist": "200 kg",
                        "soll": "2000 kg",
                        "buy": "1800 kg",
                        "lowcolor": "red"
                    },
                    {
                        "id": "3",
                        "ingredient": "Dinkelmehl Type 630",
                        "ist": "800 kg",
                        "soll": "2000 kg",
                        "buy": "1200 kg",
                        "lowcolor": "yellow"
                    },
                    {
                        "id": "4",
                        "ingredient": "Hefe",
                        "ist": "20 kg",
                        "soll": "50 kg",
                        "buy": "30 kg",
                        "lowcolor": "yellow"
                    },
                    {
                        "id": "5",
                        "ingredient": "Margarine",
                        "ist": "40kg",
                        "soll": "50kg",
                        "buy": "10kg",
                        "lowcolor": "green"
                    },
                    {
                        "id": "6",
                        "ingredient": "Eier",
                        "ist": "35 kg",
                        "soll": "40 kg",
                        "buy": "5 kg",
                        "lowcolor": "green"
                    },
                    {
                        "id": "7",
                        "ingredient": "Zucker",
                        "ist": "25 kg",
                        "soll": "50 kg",
                        "buy": "25 kg",
                        "lowcolor": "green"
                    },
                ]} />
            </Container>
        </motion.div>
    )
}

export default Lagerwesen