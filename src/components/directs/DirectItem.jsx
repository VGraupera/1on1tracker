import React from 'react';
import { Link, browserHistory } from 'react-router';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import MeetingIcon from 'material-ui/svg-icons/communication/chat';
import { grey400 } from 'material-ui/styles/colors';
import PropTypes from 'prop-types';

import { SORT_WITHOUT_TEAM_NAME } from '../../constants/sort';


const initials = (name) => {
  return name.split(' ').map(w => w[0]).join('');
};

const propTypes = {
  direct: PropTypes.shape({
    teamName: PropTypes.string,
    category: PropTypes.string,
    phone: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
};

const DirectItem = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    browserHistory.push(`/directs/${props.id}/meetings/new`);
  };

  let teamName = props.direct.teamName;
  if (SORT_WITHOUT_TEAM_NAME === teamName) {
    teamName = '';
  }
  let category = null;
  if (props.direct.category) {
    category = (
      <div style={{
        width: '12px',
        height: '12px',
        backgroundColor: props.direct.category,
        marginLeft: '30%',
        marginTop: '16%',
      }}
      />
    );
  }
  return (
    <ListItem
      primaryText={props.direct.name}
      secondaryText={<span><p>{props.direct.phone}</p><p>{teamName}</p></span>}
      containerElement={<Link to={`/directs/${props.id}`} />}
      leftAvatar={
        <div>
          <Avatar>
            {initials(props.direct.name)}
          </Avatar>
          {category}
        </div>
      }
      rightIconButton={<IconButton
        touch={true}
        onTouchTap={handleClick}
      >
        <MeetingIcon color={grey400} />
      </IconButton>}
    />
  );
};

DirectItem.propTypes = propTypes;

export default DirectItem;
