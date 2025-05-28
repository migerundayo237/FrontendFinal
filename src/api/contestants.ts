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

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://backendfinaljplmvd.onrender.com';

export const getContestants = async () => {
  const res = await axios.get(`${API_BASE}/contestants`);
  return res.data;
};

export const createContestant = async (data: Partial<Contestant>) => {
  const res = await axios.post(`${API_BASE}/contestants`, data);
  return res.data;
};

export const deleteContestant = async (id: string) => {
  const res = await axios.delete(`${API_BASE}/contestants/${id}`);
  return res.data;
};