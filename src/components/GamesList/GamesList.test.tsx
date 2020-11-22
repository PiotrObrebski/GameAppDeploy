import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

import store from '../../redux/store';
import { GamesList } from './GamesList';

describe("GamesList", () => {
  let component: ShallowWrapper<{ any: any }>;
  const props = {
    allGames: {
      gamesArray: [
        {
          id: "id",
          name: "name",
          intro_text: "intro_text",
          farewell_text: "farewell_text",
          time: 0,
        },
      ]
    }
  };

  beforeEach(() => {
    component = shallow(
      <Provider store={store}>
        <GamesList {...props}/>
      </Provider>
    );
  })

  test("Should mount", () => {
    expect(component.length).toBe(1);
  });

  test("should match snapshot", () => {
    const GamesListRender = renderer
      .create(
        <Provider store={store}>
          <Router>
          <GamesList {...props}/>
          </Router>
        </Provider>
      )
      .toJSON();
    expect(GamesListRender).toMatchSnapshot();
  });
});
