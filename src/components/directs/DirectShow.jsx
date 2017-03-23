import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  Card,
  CardActions,
  CardTitle,
  CardText,
} from 'material-ui/Card';
import {
  List,
  ListItem,
} from 'material-ui/List';
import {
  Tabs,
  Tab,
} from 'material-ui/Tabs';
import MeetingIcon from 'material-ui/svg-icons/action/speaker-notes';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import FollowUpIcon from 'material-ui/svg-icons/action/assignment';

import directActions from '../../actions/directs';
import DirectMeetingList from './DirectMeetingList';
import DirectFollowUpList from './DirectFollowUpList';

import * as headerActions from '../../actions/header';

class DirectShow extends Component {
  componentDidMount() {
    this.props.find(this.props.params.id);
    this.props.setText('Direct');
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
        <Card>
          <CardTitle title={direct.name} />
          {direct.phone && (<CardText>
            <a href={`tel:${direct.phone}`}>{direct.phone}</a>
          </CardText>
          )}
          {direct.title && (<CardText>
            {direct.title}
          </CardText>
          )}
          {direct.notes && (<CardText>
            {direct.notes}
          </CardText>
          )}
          <CardActions>
            <List>
              <ListItem
                primaryText="New Meeting"
                leftIcon={<MeetingIcon />}
                containerElement={<Link to={`/directs/${this.props.params.id}/meetings/new`} />}
              />
              <ListItem
                primaryText="New Follow Up"
                leftIcon={<FollowUpIcon />}
                containerElement={<Link to={`/directs/${this.props.params.id}/followUps/new`} />}
              />
              <ListItem
                primaryText="Edit"
                leftIcon={<EditIcon />}
                containerElement={<Link to={`/directs/${this.props.params.id}/edit`} />}
              />
            </List>
          </CardActions>
        </Card>
        <Tabs>
          <Tab label="Meetings" >
            <DirectMeetingList directId={this.props.params.id} />
          </Tab>
          <Tab label="Follow Ups" >
            <DirectFollowUpList directId={this.props.params.id} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

DirectShow.propTypes = {
  direct: React.PropTypes.object,
  find: React.PropTypes.func.isRequired,
  setText: React.PropTypes.func.isRequired,
  params: React.PropTypes.shape({
    id: React.PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => {
  return {
    direct: state.directs.activeDirect,
    loading: state.directs.loading,
    error: state.directs.error,
  };
};

export default connect(
  mapStateToProps,
  { find: directActions.find,
    setText: headerActions.setText,
  })(DirectShow);
