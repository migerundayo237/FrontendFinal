import { z } from 'zod';

export const battleSchema = z.object({
  contestant_1: z.string().min(1, 'Contestant 1 is required'),
  contestant_2: z.string().min(1, 'Contestant 2 is required'),
  winner: z.string().optional(),
  injuries: z.string().optional(),
  death_occurred: z.boolean().optional(),
  date: z.string().optional(),
});

export type BattleFormData = z.infer<typeof battleSchema>;
