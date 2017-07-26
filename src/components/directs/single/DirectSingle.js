import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import {
  Card,
  CardTitle,
  CardText,
} from 'material-ui/Card';
import {
  Tabs,
  Tab,
} from 'material-ui/Tabs';

import DirectSingleActions from './DirectSingleActions';
import UnarchiveBtn from './UnarchiveBtn';
import DirectMeetingList from './meetings/DirectMeetingList';
import DirectFollowUpList from './follow-up/DirectFollowUpList';

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
          <DirectSingleActions id={this.props.id} />
          <UnarchiveBtn id={this.props.id} />
        </Card>
        <Tabs>
          <Tab label="Meetings" >
            <DirectMeetingList directId={this.props.id} />
          </Tab>
          <Tab label="Follow Ups" >
            <DirectFollowUpList directId={this.props.id} />
          </Tab>
        </Tabs>
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