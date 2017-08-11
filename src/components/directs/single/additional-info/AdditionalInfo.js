import React from 'react';
import Paper from 'material-ui/Paper';
import { Card } from 'material-ui/Card';
import PropTypes from 'prop-types';

import Phone from './Phone';
import StartDate from './StartDate';
import Notes from './Notes';

const propTypes = {
  phone: PropTypes.string,
  notes: PropTypes.string,
  startDate: PropTypes.string,
};

const defaultProps = {
  phone: '',
  notes: '',
  startDate: '',
};

const style = {
  paper: { marginBottom: 10, marginTop: 10 },
  text: { paddingBottom: 10, paddingTop: 10 },

};

/**
 * @function DirectAdditionalInfo
 * @param props
 * @returns {XML}
 */
function DirectAdditionalInfo(props) {
  const { phone, notes, startDate } = props;
  return (
    <Paper style={style.paper}>
      <Card>
        {phone && <Phone style={style.text} phone={phone} />}
        {startDate && <StartDate style={style.text} startDate={startDate} />}
        {notes && <Notes style={style.text} notes={notes} />}
      </Card>
    </Paper>
  );
}

DirectAdditionalInfo.propTypes = propTypes;
DirectAdditionalInfo.defaultProps = defaultProps;

export default DirectAdditionalInfo;
