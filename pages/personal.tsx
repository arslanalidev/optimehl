import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { Button, Container, Group, Space, Text, Title } from '@mantine/core';
import { TableSelection } from '../components/TableSelection';
import { Employee } from '../components/TableSelection';
import EmployeeModal from './components/EditEmployeesModal';

const initialData = [
  {
    id: '1',
    avatar:
      'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    name: 'Robert Wolfkisser',
    job: 'fullTime',
    email: 'rob_wolf@gmail.com',
    availabilityToday: {
      startTime: 1,
      endTime: 9
    },
    availabilityTomorrow: {
      startTime: 5,
      endTime: 9
    }
  },
  {
    id: '2',
    avatar:
      'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    name: 'Jill Jailbreaker',
    job: 'partTime',
    email: 'jj@breaker.com',
    availabilityToday: {
      startTime: 5,
      endTime: 9
    },
    availabilityTomorrow: {
      startTime: 15,
      endTime: 19
    }
  },
  {
    id: '3',
    avatar:
      'https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    name: 'Henry Silkeater',
    job: 'fullTime',
    email: 'henry@silkeater.io',
    availabilityToday: {
      startTime: 20,
      endTime: 0
    },
    availabilityTomorrow: {
      startTime: 5,
      endTime: 9
    }
  },
  {
    id: '4',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    name: 'Bill Horsefighter',
    job: 'partTime',
    email: 'bhorsefighter@gmail.com',
    availabilityToday: {
      startTime: 18,
      endTime: 20
    },
    availabilityTomorrow: {
      startTime: 6,
      endTime: 12
    }
  }
];

const Personal = () => {
  const [data, setData] = useState(initialData);

  const openModal = (item: Employee): void => {};

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container mih={'80vh'} mt={'5vh'}>
        <Group position="apart" spacing="sm">
          <Title order={2}>Personalplanung</Title>
          <Button color="red" radius="md" size="sm">
            Hinzufügen
          </Button>
        </Group>

        <Space h={20} />

        <TableSelection
          employeesData={data}
          setEmployeesData={setData}
          openModal={openModal}
        />
      </Container>
    </motion.div>
  );
};

export default Personal;
