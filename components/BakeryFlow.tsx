import React from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

const QUARTER_HOUR_WIDTH = 150/4; // Assuming 150 was for an hour, then for 15 minutes it would be 150/4

const calculateX = (quarter) => quarter * QUARTER_HOUR_WIDTH;

const timelineNodes = Array.from({ length: 48 }).map((_, quarter) => ({
  id: `time_${quarter}`,
  type: 'output',
  position: { x: calculateX(quarter), y: 10 },
  data: { label: quarter % 4 === 0 ? `${quarter / 4}:00` : '' },
}));

const yellowBgStyle = { background: 'lightyellow' };

const unoptimizedNodes = [
  { id: 'm1', position: { x: 0, y: 80 }, data: { label: 'Mitarbeiter 1' } },
  { id: 'm1_task1', position: { x: calculateX(12), y: 80 }, data: { label: 'Brezel' } },
  { id: 'm1_task2', position: { x: calculateX(24), y: 80 }, data: { label: 'Körnerbrötchen' } },
  { id: 'm2', position: { x: 0, y: 180 }, data: { label: 'Mitarbeiter 2' } },
  { id: 'm2_task1', position: { x: calculateX(8), y: 180 }, data: { label: 'Mürbeteigboden' } },
  { id: 'm2_task2', position: { x: calculateX(28), y: 180 }, data: { label: 'Brezel' } },
];

const optimizedNodes = [
  { id: 'm1_opt', position: { x: 0, y: 280 }, data: { label: 'Mitarbeiter 1' } },
  { id: 'm1_opt_task1', position: { x: calculateX(4), y: 280 }, style: yellowBgStyle, data: { label: 'Brezel' } },
  { id: 'm1_opt_task2', position: { x: calculateX(8), y: 280 }, style: yellowBgStyle, data: { label: 'Körnerbrötchen' } },
  { id: 'm2_opt', position: { x: 0, y: 380 }, data: { label: 'Mitarbeiter 2' } },
  { id: 'm2_opt_task1', position: { x: calculateX(12), y: 380 }, style: yellowBgStyle, data: { label: 'Mürbeteigboden' } },
  { id: 'm2_opt_task2', position: { x: calculateX(16), y: 380 }, style: yellowBgStyle, data: { label: 'Brezel' } },
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
