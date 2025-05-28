'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { battleSchema } from '../../../schemas/battleSchema';

type FormData = z.infer<typeof battleSchema>;

interface Props {
  onSubmit: (data: FormData) => void;
}

export default function BattleForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(battleSchema),
  });

  const submitHandler = (data: FormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="space-y-4 mb-6">
      <div>
        <label htmlFor="contestant_1">Contestant 1 ID</label>
        <Input id="contestant_1" {...register('contestant_1')} />
        {errors.contestant_1 && <p className="text-red-500">{errors.contestant_1.message}</p>}
      </div>

      <div>
        <label htmlFor="contestant_2">Contestant 2 ID</label>
        <Input id="contestant_2" {...register('contestant_2')} />
        {errors.contestant_2 && <p className="text-red-500">{errors.contestant_2.message}</p>}
      </div>

      <div>
        <label htmlFor="winner">Winner ID (optional)</label>
        <Input id="winner" {...register('winner')} />
      </div>

      <div>
        <label htmlFor="injuries">Injuries (optional)</label>
        <Input id="injuries" {...register('injuries')} />
      </div>

      <div>
        <label htmlFor="death_occurred">Death Occurred</label>
        <input type="checkbox" id="death_occurred" {...register('death_occurred')} />
      </div>

      <div>
        <label htmlFor="date">Date (optional)</label>
        <Input type="date" id="date" {...register('date')} />
      </div>

      <Button type="submit">Add Battle</Button>
    </form>
  );
}


