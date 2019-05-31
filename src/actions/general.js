export const slot_type = (text) => {
    return {
      type: 'SLOT_TYPE',
      payload: text
    };
};

export const sports_type = (text) => {
  return {
    type: 'SPORTS_TYPE',
    payload: text
  };
};

export const lottery_type = (text) => {
  return {
    type: 'LOTTERY_TYPE',
    payload: text
  };
};

export const live_casino_type = (text) => {
  return {
    type: 'LIVECASINO_TYPE',
    payload: text
  };
};

export const game_detail = (game) => {
  return {
    type: 'GAME_DETAIL',
    payload: game
  };
};

export const handle_search =(term) => {
  return {
    type: 'TERM_CHANGED',
    payload: term
  }
}

