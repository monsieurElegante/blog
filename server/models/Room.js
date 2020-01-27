import mongoose, { mongo } from "mongoose";
const Schema = mongoose.Schema;

const Room = new Schema(
  {
    id: { type: mongo.ObjectID, required: true},
    title: { type: String, required: true },

    body: { type: [String], required: true },

    events: { type: Map, of: mongo.ObjectId},
    actions: { type: Map, of: mongo.ObjectId},
    items: { type: Array, of: mongo.ObjectId},
    exits: { type: Array, of: mongo.ObjectId}
  },

  { timestamps: true, toJSON: { virtuals: true } }
);

export default Room;
