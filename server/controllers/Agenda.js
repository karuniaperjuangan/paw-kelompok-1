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
      body: req.body.body,
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

export const updateAgendaByID = async (req, res) => {

  try {
    console.log(req.body);
    AgendaMessage.findByIdAndUpdate(req.query.id,
      {
        title: req.body.title,
        mahasiswa: req.body.mahasiswa,
        body: req.body.body,
        dosbing: req.body.dosbing,
        category: req.body.category,
        place: req.body.place,
        media: req.body.media,
        dateKP: req.body.dateKP,
      }
    ).then((agenda) => {
      if (!agenda) {
        return res.status(404).json({ message: "Data tidak ditemukan" });
      }
    });

    res.status(201).json({ message: "Data berhasil diubah" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteAgendaByID = async (req, res) => {
  try {
    const agendaMessage = await AgendaMessage.findByIdAndDelete(req.query.id).then((agenda) => {
      if (!agenda) {
        return res.status(404).json({ message: "Data tidak ditemukan" });
      }
    });
    console.log(req.query.id + " deleted");
    res.status(200).json({ message: "Data berhasil dihapus" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const findAgendaByID = async (req, res) => {
  try {
    const agendaMessage = await AgendaMessage.findById(req.query.id)
    console.log(agendaMessage);

    res.status(200).json(agendaMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


