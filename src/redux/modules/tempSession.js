export const RESTORE_TEMP_SESSION = 'mp/tempSession/RESTORE_TEMP_SESSION';

export const saveTempSession = () => {
  return (dispatch, getState) => {
    const { newSession } = getState();
    window.localStorage.setItem('matchpoint_session', JSON.stringify(newSession));
  };
};

export const clearTempSession = () => {
  window.localStorage.removeItem('matchpoint_session');
};

export const getTempSession = () => {
  const session = window.localStorage.getItem('matchpoint_session');
  return session;
};

export const restoreTempSession = () => {
  const session = window.localStorage.getItem('matchpoint_session');
  return {
    type: RESTORE_TEMP_SESSION,
    payload: JSON.parse(session),
  };
};
