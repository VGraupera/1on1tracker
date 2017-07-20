import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { getIsArchived } from '../../selectors/routing';
import { ARCHIVED_URL_SUFFIX } from '../../constants/general';

/**
 * @function ArchivedLinkGenerator
 * @param {Object} props
 * @returns {XML}
 */
function ArchivedLinkGenerator(props) {
  const { to, isArchived,dispatch, ...linkProps } = props;
  let newTo = {
    pathname: to,
  };
  if (isArchived) {
    newTo = {
      ...newTo,
      ...{
        pathname: `${to}/${ARCHIVED_URL_SUFFIX}`,
        state: { isArchived },
      },
    };
  }
  return <Link to={newTo} {...linkProps} />;
}

const mapStateToProps = state => ({
  isArchived: getIsArchived(state),
});

export default connect(mapStateToProps)(ArchivedLinkGenerator);
