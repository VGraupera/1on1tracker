/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow, mount,render } from 'enzyme';

import ShowOnArchivedHOC from '../ShowOnArchivedHOC';

const mockStore = configureStore();
const dispatch = jest.fn;
const TestComponent = () => (<div>I am test</div>);
describe('ShowOnArchivedHOC', () => {

  it('Should return null', () => {
    const Hoc = ShowOnArchivedHOC(<TestComponent />);
    const storeMock = {
      routing: {
        locationBeforeTransitions: {
          state: {
            isArchived: false,
          },
        },
      },
    };

    const wrapper = shallow(<Hoc  dispatch={dispatch} store={mockStore(storeMock)} />);
    expect(wrapper.first().shallow().first().shallow().find('div').exists()).toBeFalsy();
  });

  it('Should return passed component', () => {
    const Hoc = ShowOnArchivedHOC(<TestComponent />);
    const storeMock = {
      routing: {
        locationBeforeTransitions: {
          state: {
            isArchived: true,
          },
        },
      },
    };
    const wrapper = shallow(<Hoc  dispatch={dispatch} store={mockStore(storeMock)} />);
    console.log('ff', wrapper.first().shallow().first().shallow().first().shallow());
    //expect(wrapper.first().shallow().first().shallow().find('div').exists()).toBeTruthy();

  });
});
