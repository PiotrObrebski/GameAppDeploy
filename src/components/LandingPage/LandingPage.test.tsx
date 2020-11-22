import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import store from '../../redux/store';
import LandingPage from './LandingPage';

describe("LandingPage", () => {
  let component: ShallowWrapper<{ any: any }>;

  beforeEach(() => {
    component = shallow(
      <Provider store={store}>
        <LandingPage />
      </Provider>);
  });

  test("Should mount", () => {
    expect(component.length).toBe(1);
  });

  test("should match snapshot", () => {
    const LandingPageRender = renderer
      .create(
        <Provider store={store}>
          <LandingPage />
        </Provider>
      )
      .toJSON();
    expect(LandingPageRender).toMatchSnapshot();
  });
});
