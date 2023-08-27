import { Task } from 'gantt-task-react';

export function initTasks() {
  const currentDate = new Date();
  const tasks: Task[] = [
    {
      start: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDay()
      ),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: 'Brezel',
      id: 'Brezel1',
      progress: 25,
      type: 'project',
      hideChildren: false,
      displayOrder: 1
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        2,
        12,
        28
      ),
      name: 'Teigkneter',
      id: 'Brezel-Teigkneter',
      progress: 45,
      type: 'task',
      project: 'Brezel1',
      displayOrder: 2
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
      name: 'Teigteiler',
      id: 'Brezel-Teigteiler',
      progress: 25,
      dependencies: ['Brezel-Teigkneter'],
      type: 'task',
      project: 'Brezel1',
      displayOrder: 3
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
      name: 'Ofen',
      id: 'Brezel-Ofen',
      progress: 30,
      dependencies: ['Brezel-Teigteiler'],
      type: 'task',
      project: 'Brezel1',
      displayOrder: 4
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
      name: 'Körnerbrötchen',
      id: 'Körnerbrötchen1',
      progress: 30,
      dependencies: [''],
      type: 'project',
      displayOrder: 5,
      hideChildren: false
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
      name: 'Teigkneter',
      id: 'Körnerbrötchen-Teigkneter',
      type: 'task',
      progress: 70,
      project: 'Körnerbrötchen1',
      displayOrder: 6
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: 'Teigteiler',
      id: 'Körnerbrötchen-Teigteiler',
      progress: 30,
      type: 'task',
      dependencies: ['Körnerbrötchen-Teigkneter'],
      project: 'Körnerbrötchen1',
      displayOrder: 7
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: 'Ofen',
      id: 'Körnerbrötchen-Ofen',
      progress: currentDate.getMonth(),
      type: 'task',
      dependencies: ['Körnerbrötchen-Teigteiler'],
      project: 'Körnerbrötchen1',
      displayOrder: 8
    }
  ];
  return tasks;
}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter((t) => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}
