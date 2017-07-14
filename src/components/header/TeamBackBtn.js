import React from 'react';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { white } from 'material-ui/styles/colors';


/**
 * @function TeamBackBtn
 * @param {Object} props properties
 * @returns {XML}
 */
function TeamBackBtn(props) {
  return (
    <IconButton
      containerElement={<Link to={props.location.state.backTeamLink} />}
    >
      <FontIcon color={white} className="material-icons">arrow_back</FontIcon>
    </IconButton>
  );
}

export default TeamBackBtn;
