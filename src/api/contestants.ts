import axios from "axios";

interface Contestant {
  id: string;
  name: string;
  nickname: string;
  origin: string;
  strength: number;
  agility: number;
  wins: number;
  losses: number;
  status: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const getContestants = async () => {
  const res = await axios.get(`${API_BASE}/contestants`);
  return res.data;
};

export const createContestant = async (data: Partial<Contestant>) => {
  const res = await axios.post(`${API_BASE}/contestants`, data);
  return res.data;
};

export async function deleteContestant(id: string) {
  const res = await fetch(`http://localhost:3001/contestants/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to delete contestant with ID ${id}: ${error}`);
  }
}