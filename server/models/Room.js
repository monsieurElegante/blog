import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Room = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true }
  },

  { timestamps: true, toJSON: { virtuals: true } }
);

export default Room;
