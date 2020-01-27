import ValueSchema from "../models/Value";
import GameSchema from "../models/Game";
import { VALUE } from "./Collections";
import { GAME } from "./Collections";
import mongoose from "mongoose";

class DbContext {
  Values = mongoose.model(VALUE, ValueSchema);
  Games = mongoose.model(GAME, GameSchema)
}

export const dbContext = new DbContext();
