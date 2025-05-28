'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { getContestants, createContestant, deleteContestant } from '../../../api/contestants';
import ContestantForm from "../../components/contestant/ContestantForm";
import ContestantList from '../../components/contestant/ContestantList';
import { schema } from "../../../schemas/contestantSchema";
import { Contestant } from '../../../types/contestant';

type FormData = z.infer<typeof schema>;

export default function ContestantsPage() {
  const [contestants, setContestants] = useState<Contestant[]>([]);

  useEffect(() => {
    getContestants().then(setContestants).catch(console.error);
  }, []);

  const {
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log('Submitting:', data);
        const newContestant = await createContestant(data);
      setContestants((prev) => [...prev, newContestant]);
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
  try {
    await deleteContestant(id);
    setContestants((prev) => prev.filter((c) => c.id !== id));
  } catch (err) {
    console.error("Failed to delete contestant:", err);
  }
};

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Contestants</h1>

      {/* Form */}
      <ContestantForm onSubmit={onSubmit} />

      {/* List */}
      <ContestantList contestants={contestants} onDelete={handleDelete} />
    </div>
  );
}
