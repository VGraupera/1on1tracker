/* eslint-disable no-undef,no-unused-vars,import/first */
jest.mock('../../../selectors/routing');
import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configMockStore from 'redux-mock-store';
import { getIsArchived } from '../../../selectors/routing';
import OnArchivedContainerHOC, { componentFactory, mapStateToProps } from '../OnArchivedContainerHOC';


const TestComponent = () => <div>Test component</div>;

describe('OnArchivedContainerHOC', () => {
  describe('mapStateToProps', () => {
    getIsArchived.mockImplementationOnce(() => ({ isArchived: false }));
    const mapProps = mapStateToProps({});

    it('Should call selector getIsArchived ', () => {
      expect(getIsArchived.mock.calls.length).toBe(1);
    });

    it('Should provide isArchived prop', () => {
      expect(mapProps.isArchived).toBeDefined();
    });
  });

  describe('componentFactory', () => {
    let OnArchivedContainer;

    const dispatch = jest.fn();

    beforeEach(() => {
      OnArchivedContainer = componentFactory(TestComponent);
    });

    it('Should be instance of OnArchivedContainer', () => {
      const wrapper = shallow(<OnArchivedContainer {...{ dispatch }} />);
      expect(wrapper.find(TestComponent).exists()).toBeTruthy();
    });

    it('Should contains default prop isArchived', () => {
      const wrapper = shallow(<OnArchivedContainer {...{ dispatch }} />);
      expect(wrapper.prop('isArchived')).toBeDefined();
    });

    it('Should pass own props to wrapped component', () => {
      const wrapper = shallow(<OnArchivedContainer foo="bar" {...{ dispatch }} />);
      expect(wrapper.prop('foo')).toBe('bar');
    });
  });

  describe('OnArchivedContainerHOC', () => {
    const moskStore = configMockStore();
    const OnArchivedContainer = OnArchivedContainerHOC(TestComponent);
    const wrapper = shallow(
      <Provider store={moskStore()}>
        <OnArchivedContainer />
      </Provider>);

    it('Should exists OnArchivedContainer', () => {
      expect(wrapper.find(OnArchivedContainer).exists()).toBeTruthy();
    });
  });
});

