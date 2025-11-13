import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getJuegos = () => axios.get(`${API_URL}/juegos`);
export const createJuego = (data) => axios.post(`${API_URL}/juegos`, data);
export const updateJuego = (id, data) => axios.put(`${API_URL}/juegos/${id}`, data);
export const deleteJuego = (id) => axios.delete(`${API_URL}/juegos/${id}`);

export const getReseñas = () => axios.get(`${API_URL}/reseñas`);
export const createReseña = (data) => axios.post(`${API_URL}/reseñas`, data);
export const updateReseña = (id, data) => axios.put(`${API_URL}/reseñas/${id}`, data);
export const deleteReseña = (id) => axios.delete(`${API_URL}/reseñas/${id}`);
