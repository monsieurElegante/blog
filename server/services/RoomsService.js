import { dbContext } from "../db/DbContext";

class RoomsService {
  async find(query) {
    let rooms = await dbContext.Rooms.find(query);
    return rooms;
  }

  async findAndPopulate(query, populate) {
    return await dbContext.Rooms.find(query).populate(populate);
  }

  async findById(id) {
    let room = await dbContext.Rooms.findById(id);
    return room;
  }

  async create(roomData) {
    dbContext.Rooms.create(roomData);
  }

  async update(id, update) {
    let room = await dbContext.Rooms.findByIdAndUpdate(id, update, {
      new: true
    });
    return room;
  }
  async delete(id) {
    await dbContext.Rooms.findByIdAndRemove(id);
  }
}

export const roomsService = new RoomsService();
