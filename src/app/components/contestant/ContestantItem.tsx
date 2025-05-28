import React from 'react';
import { Contestant } from '../../../types/contestant';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

interface Props {
  contestant: Contestant;
  onDelete: (id: string) => void;
}

export default function ContestantItem({ contestant, onDelete }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {contestant.name} ({contestant.nickname})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>Origin: {contestant.origin}</p>
        <p>Status: {contestant.status}</p>
        <p>
          Strength: {contestant.strength}, Agility: {contestant.agility}
        </p>
        <p>
          Wins: {contestant.wins}, Losses: {contestant.losses}
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="destructive" onClick={() => onDelete(contestant.id)}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
