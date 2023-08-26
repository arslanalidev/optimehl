import { useState } from 'react';
import { createStyles, Table, Checkbox, ScrollArea, Group, Avatar, Text, } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    rowSelected: {
        backgroundColor:
            theme.colorScheme === 'dark'
                ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
                : theme.colors[theme.primaryColor][0],
    },
}));

interface TableSelectionProps {
    data: { avatar: string; name: string; email: string; job: string; id: string }[];
}

export function TableSelection({ data }: TableSelectionProps) {
    const { classes, cx } = useStyles();

    const rows = data.map((item) => {
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
                <td>{item.email}</td>
                <td>{item.job}</td>
                <td>{item.job}</td>
            </tr>
        );
    });

    return (
        <ScrollArea>
            <Table miw={800} verticalSpacing="sm">
                <thead>
                    <tr>
                        <th>Mitarbeiter</th>
                        <th>Typ</th>
                        <th>Verfügbarkeit heute</th>
                        <th>Verfügbarkeit morgen</th>
                        <th>Aktion</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </ScrollArea>
    );
}