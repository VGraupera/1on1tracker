import React from 'react';
import { Link, browserHistory } from 'react-router';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import MeetingIcon from 'material-ui/svg-icons/communication/chat';
import {grey400} from 'material-ui/styles/colors';


const initials = (name) => {
  return name.split(' ').map(w => w[0]).join('');
};

const DirectItem = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    browserHistory.push(`/directs/${props.id}/meetings/new`);
  };
  return (
    <ListItem
      primaryText={props.direct.name}
      secondaryText={props.direct.phone}
      containerElement={<Link to={`/directs/${props.id}`} />}
      leftAvatar={<Avatar>{initials(props.direct.name)}</Avatar>}
      rightIconButton={<IconButton
        touch={true}
        onTouchTap={handleClick}
      >
        <MeetingIcon color={grey400} />
      </IconButton>}
    />
  );
};

DirectItem.propTypes = {
};

export default DirectItem;
