import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeadInfo from './head-info/HeadInfo';
import AdditionalInfo from './additional-info/AdditionalInfo';
import DirectTabs from './tabs/DirectTabs';

const propTypes = {
  direct: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    teamName: PropTypes.string,
    phone: PropTypes.string,
    notes: PropTypes.string,
    startDate: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  find: PropTypes.func.isRequired,
};

class DirectSingle extends Component {
  componentDidMount() {
    this.props.find(this.props.direct.id);
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
        <HeadInfo
          id={direct.id}
          name={direct.name}
          title={direct.title}
          teamName={direct.teamName}
          category={direct.category}
        />
        <AdditionalInfo
          phone={direct.phone}
          notes={direct.notes}
          startDate={direct.startDate}
        />
        <DirectTabs
          directId={direct.id}
        />
      </div>
    );
  }
}
DirectSingle.propTypes = propTypes;

export default DirectSingle;
