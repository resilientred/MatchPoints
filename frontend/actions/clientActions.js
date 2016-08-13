import { apiService, apiCSRFService } from "../utils/apiUtil";

export const fetchPlayers = (clubId) => {
	apiService({
		url: `/api/clubs/${clubId}/players`,
		success: "fetchedPlayers"
	});
}

export const fetchPlayer = (id) => {
	apiService({
		url: `/api/players/${id}`,
		success: "fetchedPlayer"
	});
}
export const addPlayer = (clubId, player) => {
	apiCSRFService({
		url: `/api/clubs/${clubId}/players/new`,
		method: "POST",
		data: { player },
		success: "loggedIn"
	});
}
export const updatePlayer = (clubId, id, player) => {
apiService({
		url: `/api/clubs/${clubId}/players/${id}`,
		method: "PATCH",
		data: player,
		success: "updatedPlayer"
	});
}
export const removePlayer = (id) => {
	apiService({
		url: "/api/players/" + id,
		method: "DELETE",
		success: "removedPlayer"
	});
}

export const fetchAllClubs = () => {
	apiService({
		url: "/api/clubs/all",
		success: "fetchedAllClubs"
	})
}

export const generatePDF = (addedPlayers, schemas, club, date) => {
	debugger;
	apiCSRFService({
		url: `/api/pdfs/${club._id}`,
		method: "POST",
		data: {
			session: {addedPlayers, schemas, club, date}
		},
		success: "generatedPDF"
	})
}

export const fetchPDFLinks = (sessionId) => {
	apiService({
		url: `/api/pdfs/${sessionId}`,
		success: "generatedPDF",
		error: "log"
	})
}
