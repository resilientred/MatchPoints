import ApiUtil from "../utils/apiUtil";

export default {
	fetchPlayers() {
		ApiUtil.apiService({
			url: "/api/players",
			success: "fetchedPlayers"
		});
	},
	fetchPlayer(id) {
		ApiUtil.apiService({
			url: `/api/players/${id}`,
			success: "fetchedPlayer"
		})
	},
	addPlayer(player) {
    player.rating = +player.rating;
		ApiUtil.apiCSRFService({
			url: "/api/players",
			method: "POST",
			data: player,
			success: "updatedPlayer"
		});
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

