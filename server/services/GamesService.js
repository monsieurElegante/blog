import { dbContext } from "../db/DbContext";

class GamesService {
  async find(query) {
    let games = await dbContext.Games.find(query);
    return games;
  }

  async findAndPopulate(query, populate) {
    return await dbContext.Games.find(query).populate(populate);
  }

  async findById(id) {
    let game = await dbContext.Games.findById(id);
    return game;
  }

  async create(gameData) {
    dbContext.Games.create(gameData);
  }

  async update(id, update) {
    let game = await dbContext.Games.findByIdAndUpdate(id, update, {
      new: true
    });
    return game;
  }
  async delete(id) {
    await dbContext.Games.findByIdAndRemove(id);
  }
}

export const gamesService = new GamesService();
