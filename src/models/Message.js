import mongoose from "mongoose";

const schema = new mongoose.Schema({
  chatId: { type: String, required: true },
  username: { type: String, required: true },
  date: { type: String, required: true },
  text: { type: String, required: true },
});

export default mongoose.model("Message", schema);