import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import directActions from '../../actions/directs';
import DirectMeetingList from './DirectMeetingList';

class DirectShow extends Component {
  constructor() {
    super();
    this.onEdit = this.onEdit.bind(this);
  }

  componentDidMount() {
    this.props.find(this.props.params.id);
  }

  onEdit() {
    this.context.router.push(`/directs/${this.props.params.id}/edit`);
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
          <CardText>
            {direct.notes}
          </CardText>
          <CardActions>
            <FlatButton label="Edit" onTouchTap={this.onEdit} />
          </CardActions>
        </Card>
        <DirectMeetingList directId={this.props.params.id} />
      </div>
    );
  }
}

DirectShow.contextTypes = {
  router: React.PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    direct: state.directs.activeDirect,
    loading: state.directs.loading,
    error: state.directs.error,
  };
};


export default connect(mapStateToProps, { find: directActions.find })(DirectShow);
