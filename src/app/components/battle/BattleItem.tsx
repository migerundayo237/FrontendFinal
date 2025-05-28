import React from 'react';
import { Battle } from '../../../types/battle';
import { Contestant } from '../../../types/contestant';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

interface Props {
  battle: Battle;
  onDelete: (id: string) => void;
  contestants: Contestant[];
}

export default function BattleItem({ battle, contestants, onDelete }: Props) {

const contestantMap: Record<string, Contestant> = contestants.reduce<Record<string, Contestant>>((acc: Record<string, Contestant>, c: Contestant) => {
    acc[c.id] = c;
    return acc;
}, {});

  const c1 = contestantMap[battle.contestant_1];
  const c2 = contestantMap[battle.contestant_2];
  const winner = battle.winner ? contestantMap[battle.winner] : null;


  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {c1 ? c1.name : battle.contestant_1} vs {c2 ? c2.name : battle.contestant_2}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {winner && <p>Winner: {winner.name}</p>}
        {battle.injuries && <p>Injuries: {battle.injuries}</p>}
        <p>Death occurred: {battle.death_occurred ? 'Yes' : 'No'}</p>
        {battle.date && <p>Date: {new Date(battle.date).toLocaleDateString()}</p>}
      </CardContent>
      <CardFooter>
        <Button variant="destructive" onClick={() => onDelete(battle.id)}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
