import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';

import { getCategoriesQuestionsArray } from '../../../../selectors/categoriesQuestions';
import { setCategoryFilter } from '../../../../actions/questions';

const propTypes = {
  categoriesQuestions: PropTypes.array.isRequired,
  filterByCategory: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  setQuestionFilter: PropTypes.func.isRequired,
  loadingQuestions: PropTypes.bool.isRequired,
};

/**
 * @class CategoriesQuestions
 * @extends React.Component
 * @description Render component
 */
class CategoriesQuestions extends Component {

  state = {
    value: this.props.filterByCategory,
  };

  handleChange = (event, index, value) => {
    this.setState({ value });
    this.props.setQuestionFilter(value);
  };

  renderSelectField = () => {
    const { categoriesQuestions } = this.props;
    return (<SelectField
      floatingLabelText="Categories"
      value={this.state.value}
      onChange={this.handleChange}
    >
      <MenuItem key="all" value={false} primaryText="All" />
      {categoriesQuestions.map(({ id, name }) => (
        <MenuItem key={id} value={id} primaryText={name} />
      ))}
    </SelectField>);
  };

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const isEmpty = this.props.categoriesQuestions.length === 0;
    const { loadingQuestions } = this.props;
    return (isEmpty || loadingQuestions) ? null : this.renderSelectField();
  }
}

CategoriesQuestions.propTypes = propTypes;

const mapStateToProps = state => ({
  categoriesQuestions: getCategoriesQuestionsArray(state),
  filterByCategory: state.questions.filterByCategory,
  loadingQuestions: state.questions.loading,
});

const mapDispatchToProp = dispatch => ({
  setQuestionFilter: (categoryID) => {
    dispatch(setCategoryFilter(categoryID));
  },
});

export default connect(mapStateToProps, mapDispatchToProp)(CategoriesQuestions);
