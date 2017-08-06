import OnArchivedContainerHOC from './OnArchivedContainerHOC';

const ArchiveHocFactory = (WrappedComponent, factory) => {
  const HocComponent = factory(WrappedComponent);
  return OnArchivedContainerHOC(HocComponent);
};

export default ArchiveHocFactory;
