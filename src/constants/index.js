const tutorialElements = {
  registration: {
    elements: [
      {
        selector: '.registration-tab',
        text: 'This is where you would add players to the roster.',
      },
      {
        selector: '.session-date-picker',
        text: 'You can select the date of the session here.',
      },
      {
        selector: '.new-player-button',
        text: 'You can add new players.',
      },
      {
        selector: '.upload-player-button',
        text: 'You can mass upload players.',
      },
      {
        selector: '.table-search-field',
        text: 'You can search for players here.',
      },
      {
        selector: '.grouping-tab',
        text: 'After you are done with this screen, move on to this tab.',
      },
    ],
  },
  grouping: {
    mockStates: {
      reducer: 'grouping',
      states: {},
    },
    elements: [
      {
        selector: '.min-max',
        text: 'These fields are for adjusting the number of players allowed within a group',
      },
      {
        selector: '.select-schema-field',
        text: 'This is where you select the desired group arrangement according to the min and max value selected',
      },
      {
        selector: '.participant-group-tables',
        text: 'These are the arranged groups.',
      },
      {
        selector: '.group-menu',
        clickTarget: '.group-menu-icon',
        clickTiming: 'before',
        text: 'This is where you can print out schedules and save the session.',
      },
    ],
  },
};

export default tutorialElements;
