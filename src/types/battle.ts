export type Battle = {
  id: string;
  contestant_1: string;
  contestant_2: string;
  winner?: string;
  injuries?: string;
  death_occurred?: boolean;
  date?: string;
};