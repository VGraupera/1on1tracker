/* eslint-disable no-undef,import/first */
jest.mock('../ArchiveHocFactory', () => jest.fn());
import ArchiveHocFactory from '../ArchiveHocFactory';
import React from 'react';
import { shallow } from 'enzyme';

import HideOnArchivedHOC, { componentFactory } from '../HideOnArchivedHOC';

const TestComponent = () => (<div>I am test</div>);

describe('HideOnArchived', () => {
  let HideOnArhive;

  beforeEach(() => {
    HideOnArhive = componentFactory(TestComponent);
  });

  it('Should return wrapped component if isArchived props is not passed ', () => {
    const wrapped = shallow(<HideOnArhive />);
    expect(wrapped.find(TestComponent).exists()).toBeTruthy();
  });

  it('Should return null', () => {
    const wrapper = shallow(<HideOnArhive isArchived={true} />);
    expect(wrapper.type()).toBe(null);
  });

  it('Should return passed component', () => {
    const wrapped = shallow(<HideOnArhive isArchived={false} />);
    expect(wrapped.find(TestComponent).exists()).toBeTruthy();
  });

  describe('Props of HideOnArchived', () => {
    it('Should pass additional prop isArchived to wrapped component ', () => {
      const wrapper = shallow(<HideOnArhive isArchived={false} />);
      expect(wrapper.prop('isArchived')).toBeDefined();
    });

    it('Should pass additional props to wrapped component', () => {
      const wrapper = shallow(<HideOnArhive foo="bar" />);
      expect(wrapper.props()).toEqual({
        foo: 'bar',
        isArchived: false,
      });
    });
  });

  describe('HideOnArchivedHOC', () => {
    it('Should call ArchiveHocFactory ', () => {
      HideOnArchivedHOC(TestComponent);
      expect(ArchiveHocFactory.mock.calls.length).toBe(1);
    });
  });
});
