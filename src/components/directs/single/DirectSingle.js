import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {
  Card,
  CardTitle,
  CardText,
  CardHeader,
  CardActions,
} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import MeetingIcon from 'material-ui/svg-icons/action/speaker-notes';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import FollowUpIcon from 'material-ui/svg-icons/action/assignment';
import Avatar from 'material-ui/Avatar';
import {
  Tabs,
  Tab,
} from 'material-ui/Tabs';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import PropTypes from 'prop-types';

import DirectSingleActions from './DirectSingleActions';
import UnarchiveBtn from './UnarchiveBtn';
import DirectMeetingList from './meetings/DirectMeetingList';
import DirectFollowUpList from './follow-up/DirectFollowUpList';

const style = {
  paper: {
    marginBottom: 10,
    marginTop: 10,
  },
  cardHeaderFlex: {

  },
};

class DirectSingle extends Component {
  componentDidMount() {
    this.props.find(this.props.id);
  }

  render() {
    const { direct, loading, error } = this.props;

    if (loading) {
      return <div className="container">Loading...</div>;
    } else if (error) {
      return <div className="container">{error.message}</div>;
    } else if (!direct) {
      return <span />;
    }

    return (

      <div className="container">
        <Paper style={style.paper}>

          <Card
            style={{ textAlign: 'center' }}
          >
            <IconButton >
              <EditIcon />
            </IconButton>
            <CardHeader
              title={<h1>{direct.name}</h1>}
              textStyle={{ paddingRight: 0 }}
              avatar={
                <div style={{ marginRight: 0 }}>
                  <Avatar
                    size={80}
                  >
                  JB
                </Avatar>
                </div>
              }
              subtitle={<div>
                <p>Some Text </p>
                <h3>Team Name</h3>
              </div>}
            />

            <CardActions>
              <FloatingActionButton >
                <MeetingIcon />
              </FloatingActionButton>
              <FloatingActionButton>
                <FollowUpIcon />
              </FloatingActionButton>
            </CardActions>
          </Card>
        </Paper>
        <Paper style={style.paper}>
          <Card>
            {direct.phone && (<CardText>
              <a href={`tel:${direct.phone}`}>{direct.phone}</a>
              </CardText>
            )}
            <CardText>
                Date
              </CardText>
            {direct.notes && (<CardText>
                {direct.notes}
              </CardText>
            )}
          </Card>
        </Paper>
        <Paper style={style.paper}>
          <Tabs>
            <Tab label="Meetings" >
              <DirectMeetingList directId={this.props.id} />
            </Tab>
            <Tab label="Follow Ups" >
              <DirectFollowUpList directId={this.props.id} />
            </Tab>
          </Tabs>
        </Paper>
      </div>
    );
  }
}
DirectSingle.propTypes = {
  direct: PropTypes.object,
  find: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default DirectSingle;
