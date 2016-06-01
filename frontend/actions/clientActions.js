import ApiUtil from "../utils/apiUtil";

export default {
	fetchPlayers() {
		ApiUtil.apiService({
			url: "/api/players",
			success: "fetchedPlayers"
		});
	},

	addPlayer(player) {
		let _csrf = player._csrf;
    delete player._csrf;
    player.rating = +player.rating;
		ApiUtil.apiCSRFService({
			url: "/api/players",
			method: "POST",
			data: player,
			success: "updatedPlayer"
		}, _csrf);
	},

	updatePlayer(id, player) {
		ApiUtil.apiService({
			url: "/api/players/" + id,
			method: "PATCH",
			data: player,
			success: "updatedPlayer"
		})
	},

	removePlayer(id) {
		ApiUtil.apiService({
			url: "/api/players/" + id,
			method: "DELETE",
			success: "removedPlayer"
		})
	}
}

