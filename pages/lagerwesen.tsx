import React from 'react'
import { motion } from "framer-motion";
import {
    Container
} from '@mantine/core'
import { StatsGridIcons } from '../components/StatsGridIcons'

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
                        "title": "Revenue",
                        "value": "$13,456",
                        "diff": 34
                    },
                    {
                        "title": "Profit",
                        "value": "$4,145",
                        "diff": -13
                    },
                    {
                        "title": "Coupons usage",
                        "value": "745",
                        "diff": 18
                    }
                ]
                } />
            </Container>
        </motion.div>
    )
}

export default Lagerwesen