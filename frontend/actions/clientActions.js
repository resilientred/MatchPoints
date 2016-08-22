import { apiService, apiCSRFService } from "../utils/apiUtil";

const fetchPlayers = (clubId) => {
	apiService({
		url: `/api/clubs/${clubId}/players`,
		success: "fetchedPlayers"
	});
}

const fetchPlayer = (id) => {
	apiService({
		url: `/api/players/${id}`,
		success: "fetchedPlayer"
	});
}
const addPlayer = (clubId, player) => {
	apiCSRFService({
		url: `/api/clubs/${clubId}/players/new`,
		method: "POST",
		data: { player },
		success: "loggedIn"
	});
}
const updatePlayer = (clubId, id, player) => {
	apiCSRFService({
		url: `/api/clubs/${clubId}/players/${id}`,
		method: "PATCH",
		data: {player},
		success: "updatedClub"
	});
}
const deletePlayer = (clubId, id) => {
	apiCSRFService({
		url: `/api/clubs/${clubId}/players/${id}`,
		method: "DELETE",
		success: "updatedClub"
	});
}

const fetchAllClubs = () => {
	apiService({
		url: "/api/clubs/all",
		success: "fetchedAllClubs"
	})
}

const generatePDF = (addedPlayers, schemas, club, date) => {
	apiCSRFService({
		url: `/api/pdfs/${club._id}`,
		method: "POST",
		data: {
			session: {addedPlayers, schemas, club, date}
		},
		success: "generatedPDF",
		error: "PDFError"
	})
}

const fetchAllPlayersFromClub = (clubId) => {
	apiService({
		url: `/api/clubs/${clubId}/players`,
		success: "fetchedPlayers"
	})
}

const fetchClubRoundrobins = (clubId) => {
	apiService({
		url: `/api/clubs/${clubId}/roundrobins`,
		success: "fetchedClubRoundrobins"
	})
}

export { fetchPlayers, fetchPlayer, addPlayer, updatePlayer, deletePlayer, fetchAllClubs, generatePDF, fetchAllPlayersFromClub, fetchClubRoundrobins }