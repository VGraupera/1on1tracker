import React from "react";
import {Link} from "react-router";
import IconButton from "material-ui/IconButton";
import EditIcon from "material-ui/svg-icons/editor/mode-edit";
import PropTypes from "prop-types";

import HideOnArchivedHOC from "../../../../HOCs/archive/HideOnArchivedHOC";

const propTypes = {
  id: PropTypes.string.isRequired,
};

/**
 * @function EditIcon
 * @param {String} id
 * @returns {XML}
 */
function EditIconLink({id}) {
  return (
    <div style={{textAlign:'right',marginBottom: -50}}>
      <IconButton
        containerElement={<Link to={`/directs/${id}/edit`} />}
      >
        <EditIcon />
      </IconButton>
    </div>
  );
}

EditIconLink.propTypes = propTypes;

export default HideOnArchivedHOC(EditIconLink);
