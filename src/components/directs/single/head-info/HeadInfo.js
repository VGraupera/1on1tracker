import React from 'react';
import Paper from 'material-ui/Paper';
import {
  Card,
  CardHeader,
} from 'material-ui/Card';
import PropTypes from 'prop-types';

import EditIconLink from './EditIconLink';
import DirectAvatar from '../../DirectAvatar';
import ActionsButtons from './ActionsButtons';
import UnarchiveBtn from './UnarchiveBtn';

const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  teamName: PropTypes.string,
  category: PropTypes.string,
};

const defaultProps = {
  title: '',
  teamName: '',
  category: '',
};

/**
 * @function HeadInfo
 * @param props
 * @returns {XML}
 */
function HeadInfo(props) {
  const { id, name, title, category, teamName } = props;
  return (
    <Paper style={{
      marginBottom: 10,
      marginTop: 10,
    }}
    >

      <Card style={{ textAlign: 'center' }} >
        <EditIconLink id={id} />
        <CardHeader
          style={{ paddingBottom: 0 }}
          title={<h1>{name}</h1>}
          textStyle={{ paddingRight: 0 }}
          avatar={
            <div style={{ marginRight: 0 }}>
              <DirectAvatar
                name={name}
                category={category}
                size={80}
              />
            </div>
          }
          subtitle={
            <div>
              <p>{title}</p>
              <h3>{teamName}</h3>
            </div>
          }
        />

        <ActionsButtons id={id} />
        <UnarchiveBtn id={id} />
      </Card>
    </Paper>
  );
}

HeadInfo.propTypes = propTypes;
HeadInfo.defaultProps = defaultProps;

export default HeadInfo;
