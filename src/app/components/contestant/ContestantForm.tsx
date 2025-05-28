'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { schema } from "../../../schemas/contestantSchema"; // adjust path if needed

type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: FormData) => void;
}

export default function ContestantForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleCreate = (data: FormData) => {
    onSubmit(data);
    reset(); // reset after successful create
  };

  return (
    <form onSubmit={handleSubmit(handleCreate)} className="space-y-4 mb-6">
      <Input {...register("name")} placeholder="Name" />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <Input {...register("nickname")} placeholder="Nickname" />
      {errors.nickname && <p className="text-red-500">{errors.nickname.message}</p>}

      <Input {...register("origin")} placeholder="Origin" />
      {errors.origin && <p className="text-red-500">{errors.origin.message}</p>}

      <Input {...register("strength")} placeholder="Strength" />
      {errors.strength && <p className="text-red-500">{errors.strength.message}</p>}

      <Input {...register("agility")} placeholder="Agility" />
      {errors.agility && <p className="text-red-500">{errors.agility.message}</p>}
      
      <Input {...register("wins")} placeholder="Wins" type="number" />
      {errors.wins && <p className="text-red-500">{errors.wins.message}</p>}

      <Input {...register("losses")} placeholder="Losses" type="number" />
      {errors.losses && <p className="text-red-500">{errors.losses.message}</p>}

      <Controller
        control={control}
        name="status"
        render={({ field }) => (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger>
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="alive">Alive</SelectItem>
              <SelectItem value="dead">Dead</SelectItem>
              <SelectItem value="escaped">Escaped</SelectItem>
              <SelectItem value="free">Free</SelectItem>
            </SelectContent>
          </Select>
        )}
      />
      {errors.status && <p className="text-red-500">{errors.status.message}</p>}

      <Button type="submit">Add Contestant</Button>
    </form>
  );
}
