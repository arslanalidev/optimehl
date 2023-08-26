import { Table, ScrollArea, Group, Text, Button } from '@mantine/core';
import { useState } from 'react';

interface TableSelectionProps {
    data: { id: string, ingredient: string; ist: string; soll: string, buy: string }[];
}

function TableRow({ item }: any) {
    const [active, setActive] = useState(false)

    return (
        <tr key={item.id}>
            <td>
                <Group spacing="sm">
                    <Text size="sm" weight={500}>
                        {item.ingredient}
                    </Text>
                </Group>
            </td>
            <td>{item.ist}</td>
            <td>{item.soll}</td>
            <td>{item.buy}</td>
            <td>

                <Button
                    variant="light" radius="md" disabled={active}
                    onClick={() => { setActive(true) }}
                >
                    Bestellen
                </Button>
            </td>
        </tr>
    );

}

export function IngredientTable({ data }: TableSelectionProps) {
    const rows = data.map((item) => {
        return <TableRow key={item.id} item={item} />;
    });

    return (
        <ScrollArea>
            <Table miw={800} verticalSpacing="sm">
                <thead>
                    <tr>
                        <th>Zutaten</th>
                        <th>Ist-Bestand</th>
                        <th>Soll-Bestand</th>
                        <th>Bestellmenge</th>
                        <th style={{ width: "40px" }}>
                            Aktion
                        </th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </ScrollArea>
    );
}