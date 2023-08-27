import { Task } from 'gantt-task-react';

export function initBakerWorkday() {
  const currentDate = new Date();
  const tasks: Task[] = [
    // Baker's Project
    {
      start: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        1,
        0
      ), // 1:00 AM
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + 1,
        23,
        0
      ), // 11:00 PM next day
      name: 'Baker',
      id: 'BakerProject',
      progress: 0,
      type: 'project',
      hideChildren: false,
      displayOrder: 1
    },
    // Baker's Shift 1
    {
      start: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        1,
        0
      ), // 1:00 AM
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        4,
        0
      ), // 4:00 AM
      name: 'Baker Shift 1',
      id: 'BakerShift1',
      progress: 0,
      type: 'task',
      project: 'BakerProject',
      displayOrder: 2
    },
    // Baker's Shift 2
    {
      start: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        6,
        0
      ), // 6:00 AM
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + 1,
        3,
        0
      ), // 3:00 AM next day
      name: 'Baker Shift 2',
      id: 'BakerShift2',
      progress: 0,
      type: 'task',
      project: 'BakerProject',
      displayOrder: 3
    },
    // Employee 1
    {
      start: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        2,
        0
      ), // 2:00 AM
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        5,
        0
      ), // 5:00 AM
      name: 'Employee 1',
      id: 'Employee1',
      progress: 0,
      type: 'task',
      project: 'BakerProject',
      displayOrder: 4
    },
    // Employee 2
    {
      start: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        4,
        0
      ), // 4:00 AM
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        7,
        0
      ), // 7:00 AM
      name: 'Employee 2',
      id: 'Employee2',
      progress: 0,
      type: 'task',
      project: 'BakerProject',
      displayOrder: 5
    }
  ];
  return tasks;
}
