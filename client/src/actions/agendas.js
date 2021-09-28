import * as api from "../api";

// Action Creator
export const getAgendas = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAgendas();
    const action = { type: "FETCH_ALL", payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const createAgenda = (agenda) => async (dispatch) => {
  try {
    const { data } = await api.createAgenda(agenda);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAgenda = (id) => async (dispatch) => {
  try {
    await api.deleteAgenda(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};