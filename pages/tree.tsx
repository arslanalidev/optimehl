import { Button, Center, Group, Modal, Space, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react'
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    Panel,
} from 'reactflow';

import 'reactflow/dist/style.css';


const initialNodes = [
    { id: '1', type: "input", position: { x: 100, y: 150 }, data: { label: 'Brezeln' } },
    { id: '2', position: { x: 300, y: 150 }, data: { label: 'Semmeln' } },
    { id: '3', position: { x: 500, y: 150 }, data: { label: 'Croissant' } },
    { id: '4', position: { x: 700, y: 150 }, data: { label: 'Franzbrötchen' } },
    // { id: '4', position: { x: 700, y: 150 }, data: { label: 'Franzbrötchen' }, sourcePosition: 'right', targetPosition: 'left' },
];
const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', animated: true },
    { id: 'e2-3', source: '2', target: '3', type: 'smoothstep', animated: true },
    { id: 'e3-4', source: '3', target: '4', type: 'smoothstep', animated: true },
];


const Tree = () => {
    const router = useRouter()
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    const [opened, { open, close }] = useDisclosure(false);
    const [nodeName, setNodeName] = useState("");

    const handleAddNote = useCallback((label: any) => {
        const newNode = {
            id: (nodes.length + 1).toString(),
            position: {
                x: 0,
                y: 0,
            },
            data: { label: label },
        };
        setNodes((n) => n.concat(newNode));
    }, [setNodes, nodes]);



    return (
        <div style={{ width: '100vw', height: '85vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
            >
                <Controls />
                {/* <MiniMap /> */}
                <Background gap={12} size={1} />
                <Panel position="bottom-center" style={{ marginBottom: "3rem" }}>
                    <Group>
                        <Button
                            variant="gradient"
                            gradient={{ from: '#FF0000', to: '#FF7878' }}
                            onClick={open}
                            style={{ width: '150px' }}
                        >
                            Add node
                        </Button>
                    </Group>
                </Panel>
            </ReactFlow>

            <Modal opened={opened} onClose={close} title="Add Note" centered>
                <TextInput
                    placeholder="Enter node name"
                    label="Node name"
                    value={nodeName}
                    onChange={(event) => setNodeName(event.currentTarget.value)}
                    withAsterisk
                />
                <Space h={20} />
                <Center>
                    <Button onClick={() => {
                        handleAddNote(nodeName)
                        setNodeName("")
                        close()
                    }}>Add note</Button>
                </Center>
            </Modal>

        </div>
    )
}

export default Tree