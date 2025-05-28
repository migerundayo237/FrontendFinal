'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { getBattles, createBattle, deleteBattle } from '../../../api/battles';
import { getContestants } from '../../../api/contestants';

import BattleForm from '../../components/battle/BattleForm';
import BattleList from '../../components/battle/BattleList';

import { battleSchema } from '../../../schemas/battleSchema';
import { Battle } from '../../../types/battle';
import { Contestant } from '../../../types/contestant';

type FormData = z.infer<typeof battleSchema>;

export default function BattlesPage() {
  const [battles, setBattles] = useState<Battle[]>([]);
  const [contestants, setContestants] = useState<Contestant[]>([]);

  // Fetch contestants & battles on mount
  useEffect(() => {
    Promise.all([getBattles(), getContestants()])
      .then(([battlesData, contestantsData]) => {
        setBattles(battlesData);
        setContestants(contestantsData);
      })
      .catch(console.error);
  }, []);

  // Create a map of contestant ID to name for quick lookup
  const contestantMap = contestants.reduce<Record<string, Contestant>>((acc, c) => {
    acc[c.id] = c;
    return acc;
  }, {});

  const {
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(battleSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const newBattle = await createBattle(data);
      setBattles((prev) => [...prev, newBattle]);
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteBattle(id);
      setBattles((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      console.error('Failed to delete battle:', err);
    }
  };

  // Pass the contestantMap down so BattleList and BattleItem can use it
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Battles</h1>

      <BattleForm onSubmit={onSubmit} />

      <BattleList battles={battles} onDelete={handleDelete} contestantMap={contestantMap} />
    </div>
  );
}



