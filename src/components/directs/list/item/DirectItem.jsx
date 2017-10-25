import React from 'react';
import { ListItem } from 'material-ui/List';
import PropTypes from 'prop-types';

import { SORT_WITHOUT_TEAM_NAME } from '../../../../constants/general';
import DirectItemNewMeetingIcon from './DirectItemNewMeetingIcon';
import ArchivedLinkGenerator from './ArchivedLinkGenerator';
import DirectAvatar from '../../common/DirectAvatar';

const propTypes = {
  direct: PropTypes.shape({
    teamName: PropTypes.string,
    category: PropTypes.string,
    phone: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
};

const DirectItem = (props) => {
  let teamName = props.direct.teamName;
  if (SORT_WITHOUT_TEAM_NAME === teamName) {
    teamName = '';
  }

  return (
    <ListItem
      style={{ zIndex: 0, lineHeight: 0 }}
      innerDivStyle={{ lineHeight: 1,paddingBottom:13,paddingTop:13 }}
      primaryText={props.direct.name}
      secondaryText={<div><div>{props.direct.title}&nbsp;{props.direct.phone}</div><div>{teamName}</div></div>}
      secondaryTextLines={2}
      containerElement={<ArchivedLinkGenerator to={`/directs/${props.id}`} />}
      leftAvatar={<DirectAvatar category={props.direct.category} name={props.direct.name} />}
      rightIconButton={<DirectItemNewMeetingIcon id={props.id} />}
    />
  );
};

DirectItem.propTypes = propTypes;

export default DirectItem;
