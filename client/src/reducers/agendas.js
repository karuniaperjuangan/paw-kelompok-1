export default (agendas = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return agendas;
    default:
      return agendas
  }
};
