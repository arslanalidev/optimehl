import { createStyles, Group, Paper, Text, ThemeIcon, SimpleGrid } from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
    root: {
        padding: `calc(${theme.spacing.xl} * 1.5)`,
    },  

    label: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
}));

interface StatsGridIconsProps {
    data: { title: string; value: string; diff: number }[];
}

export function StatsGridIcons({ data }: StatsGridIconsProps) {
    const { classes } = useStyles();
    const stats = data.map((stat) => {
        const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

        return (
            <Paper withBorder p="md" radius="md" key={stat.title}>
                <Group position="apart">
                    <div>
                        <Text c="dimmed" tt="uppercase" fw={700} fz="xs" className={classes.label}>
                            {stat.title}
                        </Text>
                        <Text fw={700} fz="xl">
                            {stat.value}
                        </Text>
                    </div>
                    <ThemeIcon
                        color="gray"
                        variant="light"
                        sx={(theme) => ({ color: stat.diff > 0 ? theme.colors.teal[6] : theme.colors.red[6] })}
                        size={38}
                        radius="md"
                    >
                        <DiffIcon size="1.8rem" stroke={1.5} />
                    </ThemeIcon>
                </Group>
                <Text c="dimmed" fz="xs" mt="md">
                    <Text component="span" c={stat.diff > 0 ? 'teal' : 'red'} fw={700}>
                        {stat.diff}%
                    </Text>{' '}
                    {stat.diff > 0 ? 'Steigerung' : 'Abnahme'} im Vergleich zum letzten Monat
                </Text>
            </Paper>
        );
    });

    return (
        <div className={classes.root}>
            <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                {stats}
            </SimpleGrid>
        </div>
    );
}