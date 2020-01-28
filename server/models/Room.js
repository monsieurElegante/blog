const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const RoomSchema = new Schema(
	{
		id: { type: ObjectId, required: true, },
		title: { type: String, required: true },

		body: { type: [String], required: true },

		events: { type: Map, of: ObjectId, ref: "Event"},
		actions: { type: Map, of: ObjectId, ref: "Action"},
		items: { type: Map, of: ObjectId, ref: "Item"},
		exits: { type: Map, of: ObjectId, ref: "Room"}
	},
	{ timestamps: true, toJSON: { virtuals: true } }
);

RoomSchema.methods.addExit = function(exitName, roomId) {
	this.exits[exitName] = roomId
	this.save(function(err, product) {
		if (!this.exits[exitName]) { throw new Error("That exit name already exists here.")}
	})
}

// go: function () {},
// addItem: function () {}

module.exports = mongoose.model("Room", RoomSchema)
