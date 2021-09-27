import axios from "axios";

const url = "http://localhost:5000/agenda";

export const fetchAgendas = () => axios.get(url);
