export default (agendas = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...agendas, action.payload];
    case "DELETE":
      return agendas.filter((agendas) => agendas._id !== action.payload)
    case "UPDATE":
      return agendas.map((agenda) => agenda._id === action.payload.id ? action.payload : agenda)
    default:
      return agendas
  }
};
