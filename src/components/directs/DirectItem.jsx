import React from 'react';
import { Link } from 'react-router';
import { ListItem } from 'material-ui/List';

const DirectItem = props => (
  <ListItem
    primaryText={props.direct.name}
    containerElement={<Link to={`/directs/${props.id}`} />}
  />
);

DirectItem.propTypes = {
};

export default DirectItem;
