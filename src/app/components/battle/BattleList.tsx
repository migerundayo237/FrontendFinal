// BattleList.tsx
import React from 'react';
import BattleItem from './BattleItem';
import { Battle } from '../../../types/battle';
import { Contestant } from '../../../types/contestant';

interface Props {
  battles: Battle[];
  onDelete: (id: string) => void;
  contestantMap: Record<string, Contestant>;
}

export default function BattleList({ battles, onDelete, contestantMap }: Props) {
  if (battles.length === 0) {
    return <p>No battles found.</p>;
  }

  return (
    <ul className="space-y-2">
      {battles.map((battle) => (
        <BattleItem
          key={battle.id}
          battle={battle}
          onDelete={onDelete}
          contestants={Object.values(contestantMap)}
        />
      ))}
    </ul>
  );
}



