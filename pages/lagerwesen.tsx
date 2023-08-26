import React from 'react'
import { motion } from "framer-motion";
import {
    Container, Space, Title
} from '@mantine/core'
import { StatsGridIcons } from '../components/StatsGridIcons'
import { IngredientTable } from '../components/IngredientTable';

const Lagerwesen = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >

            <Container mih={"80vh"} mt={"5vh"}>
                <StatsGridIcons data={[
                    {
                        "title": "Umsatz",
                        "value": "€13,456",
                        "diff": 34
                    },
                    {
                        "title": "Gewinn",
                        "value": "€4,145",
                        "diff": -13
                    },
                    {
                        "title": "Verwendete Gutscheine",
                        "value": "745",
                        "diff": 18
                    }
                ]
                } />

                <Space h={30} />

                <IngredientTable data={[
                    {
                        "id": "1",
                        "ingredient": "Weißmehl Type 550",
                        "ist": "200 kg",
                        "soll": "2000 kg",
                        "buy": "1800 kg",
                    },
                    {
                        "id": "2",
                        "ingredient": "Roggenmehl Type 997",
                        "ist": "220 kg",
                        "soll": "2000 kg",
                        "buy": "1780 kg",
                    },
                    {
                        "id": "3",
                        "ingredient": "Dinkelmehl Type 630",
                        "ist": "180 kg",
                        "soll": "2000 kg",
                        "buy": "1820 kg",
                    },
                    {
                        "id": "4",
                        "ingredient": "Hefe",
                        "ist": "10 kg",
                        "soll": "50 kg",
                        "buy": "40 kg",
                    },
                    {
                        "id": "5",
                        "ingredient": "Margarine",
                        "ist": "10kg",
                        "soll": "50kg",
                        "buy": "40kg",
                    },
                    {
                        "id": "6",
                        "ingredient": "Eier",
                        "ist": "5 kg",
                        "soll": "40 kg",
                        "buy": "35 kg",
                    },
                    {
                        "id": "7",
                        "ingredient": "Zucker",
                        "ist": "25 kg",
                        "soll": "50 kg",
                        "buy": "25 kg",
                    },
                ]} />
            </Container>
        </motion.div>
    )
}

export default Lagerwesen