import express from "express";
import BaseController from "../utils/BaseController";
import { gamesService } from "../services/GamesService";
import auth0Provider from "@bcwdev/auth0Provider";

export class GamesController extends BaseController {
  constructor() {
    super("api/games");
    this.router = express
      .Router()
      .get("", this.getAll)
      .use("/:id", auth0Provider.isAuthorized)
      .get("/:id", this.getById);
  }

  async getAll(_, res, next) {
    try {
      gamesService.find({});
      return res.send(["game1", "game1"]);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      return res.send({
        game: "game" + req.params.id,
        user: req.user,
        userInfo: req.userInfo
      });
    } catch (error) {
      next(error);
    }
  }
}
