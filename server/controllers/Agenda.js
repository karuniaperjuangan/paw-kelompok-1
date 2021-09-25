import AgendaMessage from "../models/AgendaMessage.js";

export const getAgenda = async (req, res) => {
  try {
    const agendaMessage = await AgendaMessage.find();
    console.log(agendaMessage);

    res.status(200).json(agendaMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createAgenda = async (req, res) => {
  const agenda = req.body;
  const newAgenda = new AgendaMessage(agenda);

  try {
    await newAgenda.save()
    res.status(201).json(newAgenda);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
