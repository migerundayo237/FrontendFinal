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

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://backendfinaljplmvd.onrender.com';

export const getBattles = async () => {
  const res = await axios.get(`${API_BASE}/battles`);
  return res.data;
};

export const createBattle = async (data: Partial<Battle>) => {
  const res = await axios.post(`${API_BASE}/battles`, data);
  return res.data;
};

export const deleteBattle = async (id: string) => {
  const res = await axios.delete(`${API_BASE}/battles/${id}`);
  return res.data;
};

