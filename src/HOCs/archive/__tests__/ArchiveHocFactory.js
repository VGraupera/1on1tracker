/* eslint-disable import/newline-after-import,import/first,no-undef */
import React from 'react';
import ArchiveHocFactory from '../ArchiveHocFactory';
jest.mock('../OnArchivedContainerHOC');
import OnArchivedContainerHOC from '../OnArchivedContainerHOC';


describe('ArchiveHocFactory', () => {
  const TestComponent = () => (<div>Test component</div>);
  const factoryMock = jest.fn();

  ArchiveHocFactory(TestComponent, factoryMock);

  it('Should call passed factory function', () => {
    expect(factoryMock.mock.calls.length).toBe(1);
  });

  it('Should call OnArchivedContainerHOC', () => {
    expect(OnArchivedContainerHOC.mock.calls.length).toBe(1);
  });
});
