import AgendaMessage from "../models/AgendaMessage.js";

export const getAgenda = async (req, res) => {
  try {
    const agendaMessage = await AgendaMessage.find();
    console.log(agendaMessage);

    res.status(200).json(agendaMessage);
  } catch (error) {
    res.send("Gagal")
    res.status(404).json({ message: error.message });
  }
};

export const createAgenda = async (req, res) => {
  console.log(req.body);
  const agenda = req.body;
  const newAgenda = new AgendaMessage(
    {
      title: req.body.title,
      mahasiswa: req.body.mahasiswa,
      dosbing: req.body.dosbing,
      category: req.body.category,
      place: req.body.place,
      media: req.body.media,
      dateKP: req.body.dateKP,
    }
  );

  try {
    await newAgenda.save()
    res.status(201).json(newAgenda);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};


