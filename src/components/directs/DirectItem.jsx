import React from 'react';
import { Link } from 'react-router';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const initials = (name) => {
    return name.split(' ').map((w) => w[0]).join('');
}

const DirectItem = props => (
  <ListItem
    primaryText={props.direct.name}
    secondaryText={props.direct.phone}
    containerElement={<Link to={`/directs/${props.id}`} />}
    leftAvatar={<Avatar>{initials(props.direct.name)}</Avatar>}
  />
);

DirectItem.propTypes = {
};

export default DirectItem;
