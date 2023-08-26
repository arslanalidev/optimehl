import React from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

const HOUR_WIDTH = 150;

const calculateX = (hour) => hour * HOUR_WIDTH;

const timelineNodes = Array.from({ length: 12 }).map((_, hour) => ({
  id: `time_${hour + 1}`,
  type: 'output',
  position: { x: calculateX(hour), y: 10 },
  data: { label: `${hour + 1}:00` },
}));

// Unoptimiert
const unoptimizedNodes = [
  { id: 'm1', position: { x: 0, y: 80 }, data: { label: 'Mitarbeiter 1' } },
  { id: 'm1_task1', position: { x: calculateX(3), y: 80 }, data: { label: 'Brezel' } },
  { id: 'm1_task2', position: { x: calculateX(6), y: 80 }, data: { label: 'Körnerbrötchen' } },
  { id: 'm2', position: { x: 0, y: 180 }, data: { label: 'Mitarbeiter 2' } },
  { id: 'm2_task1', position: { x: calculateX(2), y: 180 }, data: { label: 'Mürbeteigboden' } },
  { id: 'm2_task2', position: { x: calculateX(7), y: 180 }, data: { label: 'Brezel' } },
];

// Optimiert
const optimizedNodes = [
  { id: 'm1_opt', position: { x: 0, y: 280 }, data: { label: 'Mitarbeiter 1' } },
  { id: 'm1_opt_task1', position: { x: calculateX(1), y: 280 }, data: { label: 'Brezel' } },
  { id: 'm1_opt_task2', position: { x: calculateX(2), y: 280 }, data: { label: 'Körnerbrötchen' } },
  { id: 'm2_opt', position: { x: 0, y: 380 }, data: { label: 'Mitarbeiter 2' } },
  { id: 'm2_opt_task1', position: { x: calculateX(3), y: 380 }, data: { label: 'Mürbeteigboden' } },
  { id: 'm2_opt_task2', position: { x: calculateX(4), y: 380 }, data: { label: 'Brezel' } },
];

const BakeryFlow = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', paddingTop: '15px' }}>
      <ReactFlow
        nodes={[...timelineNodes, ...unoptimizedNodes, ...optimizedNodes]}
        edges={[]}
      >
        <Controls />
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default BakeryFlow;
