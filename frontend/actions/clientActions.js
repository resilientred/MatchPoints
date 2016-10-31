import { apiService, apiCSRFService } from "../utils/apiUtil";

const fetchPlayers = (clubId) => {
  apiService({
    url: `/api/clubs/${clubId}/players`,
    success: "fetchedPlayers"
  });
};

const fetchPlayer = (id) => {
  apiService({
    url: `/api/players/${id}`,
    success: "fetchedPlayer"
  });
};
const addPlayer = (player) => {
  apiCSRFService({
    url: `/api/my/players/new`,
    method: "POST",
    data: { player },
    success: "addedPlayer",
    error: "logInError"
  });
};
const updatePlayer = (player) => {
  apiCSRFService({
    url: `/api/my/players/${player.id}`,
    method: "PATCH",
    data: { player },
    success: "updatedPlayer",
    error: "logInError"
  });
};
const deletePlayer = (id) => {
  apiCSRFService({
    url: `/api/my/players/${id}`,
    method: "DELETE",
    success: "removedPlayer"
  });
};

const fetchAllClubs = () => {
  apiService({
    url: "/api/clubs/all",
    success: "fetchedAllClubs"
  });
};

const uploadFile = (data) => {
  apiCSRFService({
    url: "/api/upload/players/",
    method: "POST",
    data,
    success: "parsedPlayers"
  });
};
const generatePDF = (addedPlayers, schemas, club, date) => {
  apiCSRFService({
    url: `/api/pdfs/${club._id}`,
    method: "POST",
    data: {
      session: { addedPlayers, schemas, club, date }
    },
    success: "generatedPDF",
    error: "PDFError"
  });
};

const fetchAllPlayersFromClub = (clubId) => {
  apiService({
    url: `/api/clubs/${clubId}/players`,
    success: "fetchedPlayers"
  });
};

const fetchClubRoundrobins = (clubId) => {
  apiService({
    url: `/api/clubs/${clubId}/roundrobins`,
    success: "fetchedClubRoundrobins"
  });
};

export { fetchPlayers, fetchPlayer, addPlayer,
  updatePlayer, deletePlayer, fetchAllClubs,
  generatePDF, fetchAllPlayersFromClub, fetchClubRoundrobins,
  uploadFile };
