import ValueSchema from "../models/Value";
import RoomSchema from "../models/Room";
import { VALUE } from "./Collections";
import { ROOM } from "./Collections";
import mongoose from "mongoose";

class DbContext {
  Values = mongoose.model(VALUE, ValueSchema);
  Rooms = mongoose.model(ROOM, RoomSchema)
}

export const dbContext = new DbContext();
