import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';

class DirectFollowUpList extends Component {

  constructor() {
    super();
    this.state = { selectedItems: null };
  }

  componentDidMount() {
    this.onMount();
  }

  onMount() {
    const selectedItems = new Map([...this.props.followUps]
                              .filter(([key, value]) =>
                                value.directKey === this.props.directId));
    this.setState({ selectedItems });
  }

  renderItems() {
    const rows = [];
    if (this.props.followUps &&
      this.state.selectedItems &&
      this.state.selectedItems.size > 0) {
      this.state.selectedItems.forEach((item, key) => {
        rows.push(
          <ListItem
            key={key}
            primaryText={new Date(item.followUpDate).toLocaleDateString()}
            secondaryText={item.description}
            containerElement={<Link to={`/followUps/${key}`} />}
          />);
      });
    } else {
      rows.push(
        <ListItem
          primaryText="No items"
        />);
    }
    return rows;
  }

  render() {
    return (
      <div className="wrapper">
        <List>
          {this.renderItems()}
        </List>
      </div>
    );
  }
}

DirectFollowUpList.propTypes = {
  directId: React.PropTypes.string.isRequired,
  followUps: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    followUps: state.followUps.list,
  };
};

export default connect(mapStateToProps)(DirectFollowUpList);
