const DISABLE_TUTORIAL = 'mp/user/DISABLE_TUTORIAL';
const ENABLE_TUTORIAL = 'mp/user/ENABLE_TUTORIAL';

export const disableTutorial = () => {
  localStorage.setItem('tutorial', false);
  return {
    type: DISABLE_TUTORIAL,
  };
}

/* put this in profile */
export const enableTutorial = () => {
  localStorage.setItem('tutorial', true);
  return {
    type: ENABLE_TUTORIAL,
  };
};
