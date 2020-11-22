import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import GameApp from './Game-App';
import store from './redux/store';

describe("GameApp", () => {
  let component: ShallowWrapper<{ any: any }>;

  beforeEach(() => {
    component = shallow(<GameApp />);
  });

  test("Should mount", () => {
    expect(component.length).toBe(1);
  });

  test("should match snapshot", () => {
    const GameAppRender = renderer
      .create(
        <Provider store={store}>
          <GameApp />
        </Provider>
      )
      .toJSON();
    expect(GameAppRender).toMatchSnapshot();
  });
});
