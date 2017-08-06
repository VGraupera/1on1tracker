import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import PropTypes from 'prop-types';

import AddItemBtn from './AddItemBtn';

const propTypes = {
  title: PropTypes.string.isRequired,
  openDialog: PropTypes.bool.isRequired,
  handleCloseDialog: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  ListComponent: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  FormComponent: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

/**
 * @class CrudDialogBox
 * @extends React.Component
 * @description Render component
 */
class CrudDialogBox extends Component {

  state = {
    showForm: false,
    clickedItem: null,
  };

  setDialogPropsForList = () => {
    return {
      title: `${this.props.title}s`,
      actions: <AddItemBtn handleAddItem={this.handleAddItem} />,
      actionsContainerStyle: { padding: 20, textAlign: 'center' },
    };
  };

  setDialogPropsForForm = () => ({
    title: `${this.state.clickedItem ? 'Update' : 'Add'} ${this.props.title}`,
    actions: null,
    actionsContainerStyle: {},
  });

  handleAddItem = () => {
    this.setState({ showForm: true });
  };

  handleClose = () => {
    this.hideForm();
    this.props.handleCloseDialog();
  };

  hideForm = () => {
    this.setState({ showForm: false, clickedItem: null });
  };

  handleFormSubmit = (data) => {
    this.props.submitForm(data);
    this.hideForm();
  };

  handleFormCancel = () => {
    this.hideForm();
  };

  handleClickOnItem = (data) => {
    this.setState({
      showForm: true,
      clickedItem: data,
    });
  };

  handleOnDeleteItem = (id) => {
    if (window.confirm(`Delete ${this.props.title}?`)) {
      this.props.onDeleteItem(id);
    }
  };

  renderList = () => {
    const { list, ListComponent } = this.props;
    return (
      <ListComponent
        clickOnItem={this.handleClickOnItem}
        onDelete={this.handleOnDeleteItem}
        list={list}
      />);
  };

  renderForm = () => {
    const { clickedItem } = this.state;
    const { FormComponent } = this.props;
    return (
      <FormComponent
        handleFormSubmit={this.handleFormSubmit}
        handleFormCancel={this.handleFormCancel}
        initialValues={clickedItem}
      />
    );
  };

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const { showForm } = this.state;
    const { openDialog } = this.props;

    let content = this.renderList();
    let dialogProps = this.setDialogPropsForList();

    if (showForm) {
      content = this.renderForm();
      dialogProps = this.setDialogPropsForForm();
    }
    return (
      <Dialog
        modal={false}
        open={openDialog}
        onRequestClose={this.handleClose}
        autoScrollBodyContent={true}
        {...dialogProps}
      >
        {content}
      </Dialog>
    );
  }
}

CrudDialogBox.propTypes = propTypes;

export default CrudDialogBox;
