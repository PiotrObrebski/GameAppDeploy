import {
  changeScore,
  setAllGames,
  setCurrentGame,
  setFinishedTrue,
  setUser,
  startGame,
  stopGame,
  toggleSound,
} from './actions';
import {
  FINISH_GAME,
  SET_All_GAMES,
  SET_CURRENT_GAME,
  SET_SCORE,
  SET_USER,
  START_GAME,
  STOP_GAME,
  TOGGLE_VOLUME,
} from './actionTypes';

describe("Actions", () => {
  test("setUser, should return expectedAction", () => {
    // given
    const content = {
      id: "id",
      name: "name",
      email: "email",
    };
    const expectedAction = {
      type: SET_USER,
      payload: {
        id: content.id,
        name: content.name,
        email: content.email,
      },
    };
    // when
    const action = setUser(content);
    // then
    expect(action).toEqual(expectedAction);
  });

  test("setAllGames, should return expectedAction", () => {
    // given
    const content = [
      {
        id: "id",
        name: "name",
        intro_text: "intro_text",
        farewell_text: "farewell_text",
        time: 0,
      },
    ];
    const expectedAction = {
      type: SET_All_GAMES,
      payload: content,
    };
    // when
    const action = setAllGames(content);
    // then
    expect(action).toEqual(expectedAction);
  });

  test("setCurrentGame, should return expectedAction", () => {
    // given
    const content = {
      id: "id",
      name: "name",
      intro_text: "intro_text",
      farewell_text: "farewell_text",
      time: 0,
    };
    const expectedAction = {
      type: SET_CURRENT_GAME,
      payload: {
        id: content.id,
        name: content.name,
        intro_text: content.intro_text,
        farewell_text: content.farewell_text,
        time: content.time,
      },
    };
    // when
    const action = setCurrentGame(content);
    // then
    expect(action).toEqual(expectedAction);
  });

  test("toggleSound, should return expectedAction", () => {
    const expectedAction = {
      type: TOGGLE_VOLUME,
    };
    // when
    const action = toggleSound();
    // then
    expect(action).toEqual(expectedAction);
  });

  test("changeScore, should return expectedAction", () => {
    // given
    const content = {
      volume: true,
      score: 44,
      gameActive: true,
      finished: false,
    };
    const expectedAction = {
      type: SET_SCORE,
      payload: content,
    };
    // when
    const action = changeScore(content);
    // then
    expect(action).toEqual(expectedAction);
  });

  test("startGame, should return expectedAction", () => {
    // given
    const expectedAction = {
      type: START_GAME,
    };
    // when
    const action = startGame();
    // then
    expect(action).toEqual(expectedAction);
  });

  test("stopGame, should return expectedAction", () => {
    // given
    const expectedAction = {
      type: STOP_GAME,
    };
    // when
    const action = stopGame();
    // then
    expect(action).toEqual(expectedAction);
  });

  test("setFinishedTrue, should return expectedAction", () => {
    // given
    const expectedAction = {
      type: FINISH_GAME,
    };
    // when
    const action = setFinishedTrue();
    // then
    expect(action).toEqual(expectedAction);
  });
});
