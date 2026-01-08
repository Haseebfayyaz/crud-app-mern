import axios from "axios";

const API_URL = "http://localhost:4000";

export const getPlayers = () => axios.get(`${API_URL}/players`);
export const createPlayer = (data) => axios.post(`${API_URL}/players`, data);
export const updatePlayer = (id, data) => { return axios.put(`${API_URL}/player/${id}`, data)};
export const deletePlayer = (id) => axios.delete(`${API_URL}/player/${id}`);