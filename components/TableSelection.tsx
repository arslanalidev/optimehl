import { useState } from 'react';
import {
  createStyles,
  Table,
  ScrollArea,
  Group,
  Avatar,
  Text,
  Progress,
  Badge,
  ActionIcon
} from '@mantine/core';
import { IconEdit } from '@tabler/icons-react';
import EmployeeModal from '../pages/components/EditEmployeesModal';
import { useDisclosure } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0]
  },
  progressBar: {
    '&:not(:first-of-type)': {
      borderLeft: `0.188rem solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
      }`
    }
  }
}));

type Availability = {
  startTime: number;
  endTime: number;
};

export type Employee = {
  avatar: string;
  name: string;
  email: string;
  job: string;
  id: string;
  availabilityTomorrow: Availability;
  availabilityToday: Availability;
};

interface TableSelectionProps {
  employeesData: Array<Employee>;
  setEmployeesData: Function;
  openModal: (item: Employee) => void;
}

export function TableSelection({
  employeesData,
  setEmployeesData
}: TableSelectionProps) {
  const { classes, cx, theme } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  const [currentUser, setCurrentUser] = useState(null);

  const rows = employeesData.map((item: Employee) => {
    return (
      <tr key={item.id}>
        <td>
          <Group spacing="sm">
            <Avatar size={26} src={item.avatar} radius={26} />
            <Text size="sm" weight={500}>
              {item.name}
            </Text>
          </Group>
        </td>
        <td>
          <Badge color={item.job === 'fullTime' ? 'blue' : 'yellow'}>
            {item.job === 'fullTime' ? 'Full time' : 'Part Time'}
          </Badge>
        </td>
        <td>
          <Group position="apart">
            <Text fz="xs" c="teal" weight={700}>
              {`${item.availabilityToday.startTime} - ${item.availabilityToday.endTime}`}
            </Text>
          </Group>
          <Progress
            classNames={{ bar: classes.progressBar }}
            value={item.job === 'fullTime' ? 100 : 50}
            color="teal"
          />
        </td>
        <td>
          <Group position="apart">
            <Text fz="xs" c="teal" weight={700}>
              {`${item.availabilityTomorrow.startTime} - ${item.availabilityTomorrow.endTime}`}
            </Text>
          </Group>
          <Progress
            classNames={{ bar: classes.progressBar }}
            value={item.job === 'fullTime' ? 100 : 50}
            color="teal"
          />
        </td>
        <td>
          <ActionIcon
            onClick={() => {
              setCurrentUser(item);
              open();
            }}
          >
            <IconEdit size="1.125rem" />
          </ActionIcon>
        </td>
      </tr>
    );
  });

  return (
    <>
      <ScrollArea>
        <Table miw={800} verticalSpacing="sm">
          <thead>
            <tr>
              <th>Mitarbeiter</th>
              <th>Type</th>
              <th>Verfügbarkeit heute</th>
              <th>Verfügbarkeit morgen</th>
              <th>Aktion</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
      <EmployeeModal
        employeesData={employeesData}
        setEmployeesData={setEmployeesData}
        opened={opened}
        close={close}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
    </>
  );
}
