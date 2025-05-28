import axios from "axios";

export interface Battle {
  id: string;
  contestant_1: string;
  contestant_2: string;
  winner?: string;
  injuries?: string;
  death_occurred?: boolean;
  date?: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const getBattles = async () => {
  const res = await axios.get(`${API_BASE}/battles`);
  return res.data;
};

export const createBattle = async (data: Partial<Battle>) => {
  const res = await axios.post(`${API_BASE}/battles`, data);
  return res.data;
};

export async function deleteBattle(id: string) {
  const res = await fetch(`http://localhost:3001/battles/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to delete battle with ID ${id}: ${error}`);
  }
}
