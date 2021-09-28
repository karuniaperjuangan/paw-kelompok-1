import axios from "axios";

const url = "http://localhost:5000/agenda";

export const fetchAgendas = () => axios.get(url);
export const createAgenda = (newAgenda) => axios.post(url + "/create", newAgenda);
export const deleteAgenda = (id) => axios.delete(`${url}/delete?id=${id}`);
export const updateAgenda = (id, updateAgenda) => axios.put(`${url}/update?id=${id}`, updateAgenda);
