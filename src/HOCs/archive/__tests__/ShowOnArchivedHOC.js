/* eslint-disable no-undef,import/first */
jest.mock('../ArchiveHocFactory', () => jest.fn());
import React from 'react';
import { shallow } from 'enzyme';

import ShowOnArchivedHOC, { componentFactory } from '../ShowOnArchivedHOC';
import ArchiveHocFactory from '../ArchiveHocFactory';


const TestComponent = () => (<div>I am test</div>);
describe('ShowOnArchived', () => {
  let ShowOnArchived;

  beforeEach(() => {
    ShowOnArchived = componentFactory(TestComponent);
  });

  it('Should return null if isArchived not passed as props ', () => {
    const wrapper = shallow(<ShowOnArchived />);
    expect(wrapper.type()).toBe(null);
  });

  it('Should return null', () => {
    const wrapper = shallow(<ShowOnArchived isArchived={false} />);
    expect(wrapper.type()).toBe(null);
  });


  it('Should return passed component', () => {
    const wrapper = shallow(<ShowOnArchived isArchived={true} />);
    expect(wrapper.find(TestComponent).exists()).toBeTruthy();
  });

  describe('Props of ShowOnArchived', () => {
    it('Should pass additional prop isArchived to wrapped component ', () => {
      const wrapper = shallow(<ShowOnArchived isArchived={true} />);
      expect(wrapper.prop('isArchived')).toBeDefined();
    });

    it('Should pass additional props to wrapped component', () => {
      const wrapper = shallow(<ShowOnArchived isArchived={true} foo="bar" />);
      expect(wrapper.props()).toEqual({
        foo: 'bar',
        isArchived: true,
      });
    });
  });

  describe('ShowOnArchivedHOC', () => {
    it('Should call ArchiveHocFactory ', () => {
      ShowOnArchivedHOC(TestComponent);
      expect(ArchiveHocFactory.mock.calls.length).toBe(1);
    });
  });
});
