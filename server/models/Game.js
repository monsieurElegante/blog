const mongoose = require('mongoose');
const Room =  require('../models/Room');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Game = new Schema(
	{
		title: {type: String, required: true},
		description: { type: String, required: true },
		currentRoom: { type: ObjectId, required: true },
		currentPlayer: { type: ObjectId, required: true},

		rooms: { type: Map, of: ObjectId }
	},

	{ timestamps: true, toJSON: { virtuals: true } }
);

Game.method({
	setup: function (game) {

		// #region Room initializing

		let advert = new Room({ 
			title: "Immigrate to Sexy Kinktopia!",  
			body: [
				"Based on your browsing profile, the government of Kinktopia has pre-selected you for immigration.", 
				"Kinktopia is a sovereign space station and government founded in order to create a sexually-liberated human society.",
				"Click here apply!"
			]
		})
		let terminal = new Room({
			title: "Spaceport Terminal",
			body: [
				"You stand at Gate F69.  There is a woman here."
			]
		})
		let galley = new Room({
			title: "The XX Kinkster: Galley",
			body: [
				"You are in the ship's galley."
			]
		})
		let office = new Room({
			title: "The XX Kinkster: Jenny's Office",
			body: [
				"You are in Jenny's Office."
			]
		})
		let rec = new Room({
			title: "The XX Kinkster: Rec Room",
			body: [
				"You are in the ship's rec room."
			]
		})
		let room = new Room({
			title: "The XX Kinkster: Your Room",
			body: [
				"You are in a small room with a bunk and a desk."
			]
		})
		advert.save().catch(err => { console.error(err) })
		terminal.save().catch(err => { console.error(err) })
		galley.save().catch(err => { console.error(err) })
		office.save().catch(err => { console.error(err) })
		rec.save().catch(err => { console.error(err) })
		room.save().catch(err => { console.error(err) })
		// #endregion

		// #region Connecting rooms

		// advert.addExit("continue", terminal)

		// #endregion
	}
})

export default Game;
