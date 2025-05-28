import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, "Name is required"),
  nickname: z.string().min(1, "Nickname is required"),
  origin: z.string().min(1, "Origin is required"),
  strength: z.coerce.number().min(1).max(100),
  agility: z.coerce.number().min(1).max(100),
  wins: z.coerce.number().min(0),
  losses: z.coerce.number().min(0),
  status: z.enum(["alive", "dead", "escaped", "free"]),
});
