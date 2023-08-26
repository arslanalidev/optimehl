import React from 'react'
import { motion } from "framer-motion";

import {
    Button, Container, Group, Space, Text, Title
} from '@mantine/core'
import { TableSelection } from '../components/TableSelection';


const Personal = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >

            <Container mih={"80vh"} mt={"5vh"}>
                <Group position="apart" spacing="sm">
                    <Title order={2}>Personalplanung</Title>
                    <Button color="red" radius="md" size="sm">
                        Hinzufügen
                    </Button>
                </Group>

                <Space h={20} />

                <TableSelection data={[
                    {
                        "id": "1",
                        "avatar": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
                        "name": "Robert Wolfkisser",
                        "job": "Engineer",
                        "email": "rob_wolf@gmail.com"
                    },
                    {
                        "id": "2",
                        "avatar": "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
                        "name": "Jill Jailbreaker",
                        "job": "Engineer",
                        "email": "jj@breaker.com"
                    },
                    {
                        "id": "3",
                        "avatar": "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
                        "name": "Henry Silkeater",
                        "job": "Designer",
                        "email": "henry@silkeater.io"
                    },
                    {
                        "id": "4",
                        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
                        "name": "Bill Horsefighter",
                        "job": "Designer",
                        "email": "bhorsefighter@gmail.com"
                    },
                    {
                        "id": "5",
                        "avatar": "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
                        "name": "Jeremy Footviewer",
                        "job": "Manager",
                        "email": "jeremy@foot.dev"
                    }
                ]} />

            </Container>

        </motion.div>
    )
}

export default Personal