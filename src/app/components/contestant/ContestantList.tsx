import React from 'react';
import ContestantItem from './ContestantItem';
import { Contestant } from '../../../types/contestant';

interface Props {
  contestants: Contestant[];
  onDelete: (id: string) => void;
}

export default function ContestantList({ contestants, onDelete }: Props) {
  if (contestants.length === 0) {
    return <p>No contestants found.</p>;
  }

  return (
    <ul className="space-y-2">
      {contestants.map((c) => (
        <ContestantItem key={c.id} contestant={c} onDelete={onDelete} />
      ))}
    </ul>
  );
}
