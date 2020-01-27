import express from "express";
import BaseController from "../utils/BaseController";
import { roomsService } from "../services/RoomsService";
import auth0Provider from "@bcwdev/auth0Provider";

export class RoomsController extends BaseController {
  constructor() {
    super("api/rooms");
    this.router = express
      .Router()
      .get("", this.getAll)
      .use("/:id", auth0Provider.isAuthorized)
      .get("/:id", this.getById);
  }

  async getAll(_, res, next) {
    try {
      roomsService.find({});
      return res.send(["room1", "room1"]);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      return res.send({
        room: "room" + req.params.id,
        user: req.user,
        userInfo: req.userInfo
      });
    } catch (error) {
      next(error);
    }
  }
}
