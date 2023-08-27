// @ts-nocheck
import React, {useState} from 'react';
import {useDisclosure} from '@mantine/hooks';
import {Modal, Button, Table, Container, Paper} from '@mantine/core';
import AddProduct from '../components/AddProduct';
import {getStartEndDateForProject, initTasks} from '../helper';
// import BakeryFlow from '../components/BakeryFlow';
import {
    Gantt,
    Task,
    EventOption,
    StylingOption,
    ViewMode,
    DisplayOption
} from 'gantt-task-react';
import 'gantt-task-react/dist/index.css';

const Produktionsleitung = () => {
    const [opened, {open, close}] = useDisclosure(false);
    const [products, setProducts] = useState([]);

    const [view, setView] = React.useState<ViewMode>(ViewMode.Hour);
    const [tasks, setTasks] = React.useState<Task[]>(initTasks());
    const [isChecked, setIsChecked] = React.useState(true);
    let columnWidth = 65;
    if (view === ViewMode.Year) {
        columnWidth = 350;
    } else if (view === ViewMode.Month) {
        columnWidth = 300;
    } else if (view === ViewMode.Week) {
        columnWidth = 250;
    }

    const handleAddProduct = (product, quantity) => {
        setProducts((prevProducts) => [...prevProducts, {product, quantity}]);
    };

    const hasProduct = (productName) => products.some(p => p.product === productName);
    const handleTaskChange = (task: Task) => {
        console.log('On date change Id:' + task.id);
        let newTasks = tasks.map((t) => (t.id === task.id ? task : t));
        if (task.project) {
            const [start, end] = getStartEndDateForProject(newTasks, task.project);
            const project =
                newTasks[newTasks.findIndex((t) => t.id === task.project)];
            if (
                project.start.getTime() !== start.getTime() ||
                project.end.getTime() !== end.getTime()
            ) {
                const changedProject = {...project, start, end};
                newTasks = newTasks.map((t) =>
                    t.id === task.project ? changedProject : t
                );
            }
        }
        setTasks(newTasks);
    };

    const handleTaskDelete = (task: Task) => {
        const conf = window.confirm('Are you sure about ' + task.name + ' ?');
        if (conf) {
            setTasks(tasks.filter((t) => t.id !== task.id));
        }
        return conf;
    };

    const handleProgressChange = async (task: Task) => {
        setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
        console.log('On progress change Id:' + task.id);
    };

    const handleDblClick = (task: Task) => {
        alert('On Double Click event Id:' + task.id);
    };

    const handleClick = (task: Task) => {
        console.log('On Click event Id:' + task.id);
    };

    const handleSelect = (task: Task, isSelected: boolean) => {
        console.log(task.name + ' has ' + (isSelected ? 'selected' : 'unselected'));
    };

    const handleExpanderClick = (task: Task) => {
        setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
        console.log('On expander click Id:' + task.id);
    };

    return (
        <Container mih={'80vh'} mt={'5vh'}>
            <Modal opened={opened} onClose={close} title="Produkt hinzufügen">
                <AddProduct onAddProduct={handleAddProduct}></AddProduct>
            </Modal>


            {/* <ViewSwitcher
        onViewModeChange={(viewMode) => setView(viewMode)}
        onViewListChange={setIsChecked}
        isChecked={isChecked}
      /> */}
            <Paper style={{width: '100%', marginBottom: '20px'}}>
                <Table>
                    <thead>
                    <tr>
                        <th>Produkt</th>
                        <th>Menge</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((prod, index) => (
                        <tr key={index}>
                            {/* @ts-ignore */}
                            <td>{prod.product}</td>
                            {/* @ts-ignore */}
                            <td>{prod.quantity}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Paper>
            <Button onClick={open} style={{marginTop: '20px'}}>
                Produkt hinzufügen
            </Button>
            <h3>Produktionsplan</h3>

            {
                hasProduct('Brezel') &&
                hasProduct('Körnerbrötchen') &&
                hasProduct('Mürbeteigboden')
                    ?
                    <Gantt
                        tasks={tasks}
                        viewMode={view}
                        onDateChange={handleTaskChange}
                        onDelete={handleTaskDelete}
                        onProgressChange={handleProgressChange}
                        onDoubleClick={handleDblClick}
                        onClick={handleClick}
                        onSelect={handleSelect}
                        onExpanderClick={handleExpanderClick}
                        listCellWidth={isChecked ? '155px' : ''}
                        columnWidth={columnWidth}
                    />
                    : null
            }


            {/* <BakeryFlow /> */}
        </Container>
    );
};

export default Produktionsleitung;
