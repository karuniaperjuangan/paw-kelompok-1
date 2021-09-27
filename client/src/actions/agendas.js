import * as api from "../api";

// Action Creator
export const getAgendas = () => async (dispatch) => {
  try {
    const {data} = await api.fetchAgendas();
    const action = { type: "FETCH_ALL", payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};
