import mongoose from "mongoose";

const agendaSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: String,
  creator: {
    type: String,
    required: true,
  },
  dosbing: [String],
  category: {
    type: String,
    enum: ["TE", "TI", "TB"],
    default: "TI",
  },
  place: String,
  media: {
    type: String,
    required: true,
  },
  dateKP: {
    type: Date,
    required: true,
  },
});

const AgendaMessage = mongoose.model("AgendaMessage", agendaSchema);

export default AgendaMessage;