export default (agendas = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...agendas, action.payload];
    case "DELETE":
      return agendas.filter((agendas) => agendas._id != action.payload)
    default:
      return agendas
  }
};
