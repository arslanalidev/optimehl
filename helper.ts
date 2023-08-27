// @ts-nocheck
import { Task } from 'gantt-task-react';

export function initBakerWorkday() {
  const aktuellesDatum = new Date();
  const aufgaben: Task[] = [
    // Bäckerei Projekt
    {
      start: new Date(
        aktuellesDatum.getFullYear(),
        aktuellesDatum.getMonth(),
        aktuellesDatum.getDate(),
        1,
        0
      ),
      end: new Date(
        aktuellesDatum.getFullYear(),
        aktuellesDatum.getMonth(),
        aktuellesDatum.getDate() + 1,
        23,
        0
      ),
      name: 'Bäckerei',
      id: 'BaeckereiProjekt',
      fortschritt: 0,
      typ: 'projekt',
      kinderVerstecken: false,
      anzeigeReihenfolge: 1
    },
    // Mitarbeiter 1 - Brezeln
    {
      start: new Date(
        aktuellesDatum.getFullYear(),
        aktuellesDatum.getMonth(),
        aktuellesDatum.getDate(),
        1,
        0
      ),
      end: new Date(
        aktuellesDatum.getFullYear(),
        aktuellesDatum.getMonth(),
        aktuellesDatum.getDate(),
        3,
        0
      ),
      name: 'Mitarbeiter 1 - Brezeln',
      id: 'Mitarbeiter1Brezeln',
      fortschritt: 0,
      typ: 'aufgabe',
      projekt: 'BaeckereiProjekt',
      anzeigeReihenfolge: 2
    },
    // Mitarbeiter 1 - Körnerbrötchen
    {
      start: new Date(
        aktuellesDatum.getFullYear(),
        aktuellesDatum.getMonth(),
        aktuellesDatum.getDate(),
        3,
        0
      ),
      end: new Date(
        aktuellesDatum.getFullYear(),
        aktuellesDatum.getMonth(),
        aktuellesDatum.getDate(),
        5,
        0
      ),
      name: 'Mitarbeiter 1 - Körnerbrötchen',
      id: 'Mitarbeiter1Broetchen',
      fortschritt: 0,
      typ: 'aufgabe',
      projekt: 'BaeckereiProjekt',
      anzeigeReihenfolge: 3
    },
    // Mitarbeiter 2 - Mürbeteigböden
    {
      start: new Date(
        aktuellesDatum.getFullYear(),
        aktuellesDatum.getMonth(),
        aktuellesDatum.getDate(),
        5,
        0
      ),
      end: new Date(
        aktuellesDatum.getFullYear(),
        aktuellesDatum.getMonth(),
        aktuellesDatum.getDate(),
        7,
        0
      ),
      name: 'Mitarbeiter 2 - Mürbeteigböden',
      id: 'Mitarbeiter2Teigboeden',
      fortschritt: 0,
      typ: 'aufgabe',
      projekt: 'BaeckereiProjekt',
      anzeigeReihenfolge: 4
    },
    // Teigkneter
    {
      start: new Date(
        aktuellesDatum.getFullYear(),
        aktuellesDatum.getMonth(),
        aktuellesDatum.getDate(),
        7,
        0
      ),
      end: new Date(
        aktuellesDatum.getFullYear(),
        aktuellesDatum.getMonth(),
        aktuellesDatum.getDate(),
        8,
        0
      ),
      name: 'Teigkneter',
      id: 'Teigkneter',
      fortschritt: 0,
      typ: 'aufgabe',
      projekt: 'BaeckereiProjekt',
      anzeigeReihenfolge: 5
    },
    // Teigteiler
    {
      start: new Date(
        aktuellesDatum.getFullYear(),
        aktuellesDatum.getMonth(),
        aktuellesDatum.getDate(),
        8,
        0
      ),
      end: new Date(
        aktuellesDatum.getFullYear(),
        aktuellesDatum.getMonth(),
        aktuellesDatum.getDate(),
        9,
        0
      ),
      name: 'Teigteiler',
      id: 'Teigteiler',
      fortschritt: 0,
      typ: 'aufgabe',
      projekt: 'BaeckereiProjekt',
      anzeigeReihenfolge: 6
    },
    // Stikkeofen
    {
      start: new Date(
        aktuellesDatum.getFullYear(),
        aktuellesDatum.getMonth(),
        aktuellesDatum.getDate(),
        9,
        0
      ),
      end: new Date(
        aktuellesDatum.getFullYear(),
        aktuellesDatum.getMonth(),
        aktuellesDatum.getDate(),
        11,
        0
      ),
      name: 'Stikkenofen',
      id: 'Stikkbeofen',
      fortschritt: 0,
      typ: 'aufgabe',
      projekt: 'BaeckereiProjekt',
      anzeigeReihenfolge: 7
    }
  ];
  return aufgaben;
}
