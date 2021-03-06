import {
  FETCH_NAMES_REQUEST,
  LISTSCREEN_NAME_FAVORITE,
  FAVSCREEN_NAME_FAVORITE,
  LISTSCREEN_NAME_UNFAVORITE,
  FAVSCREEN_NAME_UNFAVORITE,
  LISTSCREEN_NAME_OPEN,
  FAVSCREEN_NAME_OPEN,
  LISTSCREEN_VIEW,
  FAVSCREEN_VIEW,
  LISTSCREEN_SCROLL,
  FAVSCREEN_SCROLL,
  LISTSCREEN_RATEALERT_RATE,
  LISTSCREEN_RATEALERT_UPDATEVISITS,
  LISTSCREEN_RATEALERT_RESETVISITS,
} from '../constants/ActionTypes';

const isScreenFavorites = screen => screen === 'Favorites';

export const favoritesScreenView = () => ({
  type: FAVSCREEN_VIEW
});

export const listScreenView = () => ({
  type: LISTSCREEN_VIEW
});

export const favorite = (screen, payload) => {
  let actionType = '';
  if (isScreenFavorites(screen)) {
    actionType = {
      true: FAVSCREEN_NAME_FAVORITE,
      false: FAVSCREEN_NAME_UNFAVORITE
    }[payload.name.isFavorite];
  } else {
    actionType = {
      true: LISTSCREEN_NAME_FAVORITE,
      false: LISTSCREEN_NAME_UNFAVORITE
    }[payload.name.isFavorite];
  }

  return {
    type: actionType,
    payload
  };
};

export const scrollEvent = screen => {
  let type = LISTSCREEN_SCROLL;
  if (isScreenFavorites(screen)) {
    type = FAVSCREEN_SCROLL;
  }
  return { type };
};

export const openNameScreen = screen => {
  let type = LISTSCREEN_NAME_OPEN;
  if (isScreenFavorites(screen)) {
    type = FAVSCREEN_NAME_OPEN;
  }
  return { type };
};

export const loadNames = () => ({
  type: FETCH_NAMES_REQUEST
});

export const rateApp = () => ({
  type: LISTSCREEN_RATEALERT_RATE
});

export const updateUserVisits = () => ({
  type: LISTSCREEN_RATEALERT_UPDATEVISITS
});

export const resetUserVisits = () => ({
  type: LISTSCREEN_RATEALERT_RESETVISITS
});
